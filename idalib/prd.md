# 需求文档

| 项目 | 内容 |
|---|---|
| 文档状态 | Draft |
| 产品阶段 | 需求沉淀 |
| 工作名称 | idatanlyzer |
| 目标形态 | 本地命令行工具 |
| 主要依赖 | IDA Pro、IDAPython、Hex-Rays |

## 1. 产品概述

idatanlyzer 是一个面向个人二进制分析工作流的静态分析框架。它通过 `idat` 批量加载裸二进制或 IDA 数据库，在 IDAPython 环境内执行可组合分析器，将入口、交叉引用、反编译代码、协议结构、通信面和数据流证据输出为稳定的结构化报告。

产品不追求一次性自动还原完整协议，也不代替人工逆向。它负责完成重复、机械、适合批处理的工作，为人工分析或下游 LLM 提供可定位、可复核、可追溯的证据。

## 2. 背景与问题

个人二进制分析通常存在以下重复劳动：

- 每次都要手动创建或打开 IDA 数据库。
- 需要重复查找 `recv`、`read`、`SSL_read` 等外部输入点。
- 需要逐个查看调用点、所属函数、反编译代码和下游调用。
- 分析结果散落在 IDA 视图、文本笔记和临时脚本中。
- 不同目标使用不同脚本，参数、输出格式和错误处理不统一。
- 自动化脚本经常直接修改 IDB，缺少安全边界。
- 分析结果缺少输入摘要、IDA 版本和规则版本，难以复现。
- 下游 LLM 缺少稳定的数据契约，只能消费大量无结构反编译文本。

本产品需要把这些步骤固化成一条稳定流水线：

```text
目标文件
  → 宿主 CLI
  → idat 批处理
  → 可组合 IDAPython 分析器
  → 结构化证据
  → 人工审阅或 LLM 深入分析
```

## 3. 产品目标

### 3.1 核心目标

1. 提供一个稳定、统一的 `idat` 命令行入口。
2. 将普通 Python 宿主逻辑与 IDAPython 分析逻辑明确分离。
3. 默认以只读方式分析，不污染目标目录，不修改原始 IDB。
4. 支持按 profile 组合个人常用分析能力。
5. 所有发现必须包含地址、函数、来源和可复核证据。
6. JSON 作为唯一完整数据源，其他报告均由 JSON 派生。
7. 每次运行记录输入、环境、规则和分析器版本，确保结果可复现。
8. 支持逐步扩展协议分析、通信面、污点传播和漏洞筛选能力。

### 3.2 非目标

- 不实现动态调试、抓包或运行时插桩。
- 不保证自动恢复完整、准确的协议规范。
- 不在首版实现跨进程网络对端关联。
- 不在首版实现完整 SSA 或符号执行。
- 不把所有 IDA 操作封装成通用自动化平台。
- 不默认重命名函数、写注释、写书签或保存原始 IDB。
- 不把 HTML 或文本摘要作为机器消费的数据源。

## 4. 目标用户

主要用户是产品维护者本人，典型工作对象包括：

- Linux ELF 服务程序。
- 嵌入式固件中的可执行文件和共享库。
- 网络协议、IPC、消息队列、MQTT、串口相关程序。
- C/C++ 编译产物。
- 已有 `.i64`、`.idb` 数据库或裸二进制。

产品优先服务个人习惯和高频工作，不以多租户、团队权限管理或云端部署为目标。

## 5. 设计原则

### 5.1 安全默认值

- 原始目标文件永不修改。
- 已有 IDB 默认复制到运行缓存后分析。
- 裸二进制生成的数据库放入缓存目录，不写入目标旁边。
- 删除锁文件、重命名符号、写注释、写书签和保存原 IDB 均需显式开启。
- 任何写入模式都必须在运行清单和最终报告中标记。

### 5.2 证据优先

每条发现至少包含：

- 地址。
- 所属函数地址和名称。
- 分析器名称。
- 发现来源。
- 置信度。
- 反编译片段或反汇编片段。
- 适用规则标识。

推断结果不能代替证据。报告需要区分确认事实、启发式推断和待人工验证项。

### 5.3 小核心、可组合分析器

框架只负责运行、生命周期、错误隔离和报告汇总。具体能力通过分析器注册：

- `metadata`
- `entrypoints`
- `callgraph`
- `protocol`
- `communication`
- `crypto`
- `dangerous_calls`
- `taint`

每个分析器应能独立启用、禁用和失败，不因单个分析器异常中断整次运行。

### 5.4 配置优先

个人习惯通过 profile 和规则表达，不持续堆叠命令行参数。

- TOML：用户配置、运行 profile。
- JSON：API、危险函数、协议 seed 等机器规则。
- 命令行参数：目标、输出、profile 和少量临时覆盖项。

### 5.5 渐进精度

- 首版可使用反编译文本和正则完成快速闭环。
- 稳定功能逐步迁移到 Hex-Rays ctree。
- 对精度要求高的数据流功能再引入 microcode。
- 每次精度升级必须保持输出 schema 兼容或显式升级版本。

## 6. 核心用户流程

### 6.1 快速扫描裸二进制

```bash
personal-idat analyze ./target --profile quick
```

预期行为：

1. 校验目标文件。
2. 定位可执行的 `idat`。
3. 创建隔离运行目录。
4. 在缓存目录生成 IDA 数据库。
5. 执行元数据、入口和反编译证据分析。
6. 写出 JSON、摘要和日志。
7. 返回与运行状态一致的退出码。

### 6.2 协议分析

```bash
personal-idat analyze ./service.i64 --profile protocol
```

预期行为：

- 复用数据库副本。
- 定位外部输入点。
- 追踪直接 dispatcher。
- 提取 switch、字符串分发、Magic、长度字段和字段访问。
- 输出协议候选及来源置信度。

### 6.3 固件通信面分析

```bash
personal-idat analyze ./firmware-bin --profile firmware
```

预期行为：

- 枚举 socket、IPC、D-Bus、消息队列、MQTT 和串口原语。
- 尽力提取端口、地址、角色、broker、topic、设备路径和波特率。
- 无法确认的值必须标记为配置来源或未知，不能猜测。

### 6.4 调试单个分析器

```bash
personal-idat analyze ./target --only entrypoints --verbose
```

预期行为：

- 只执行依赖闭包内的最少分析器。
- 保留完整 IDA 输出。
- 报告分析器耗时和异常栈。

## 7. 产品架构

```text
┌──────────────────────────────────────┐
│ Host Python                          │
│ CLI / config / cache / process / log │
└──────────────────┬───────────────────┘
                   │ manifest
                   ▼
┌──────────────────────────────────────┐
│ idat + IDAPython                     │
│ bootstrap / registry / analyzers     │
└──────────────────┬───────────────────┘
                   │ result fragments
                   ▼
┌──────────────────────────────────────┐
│ Report                               │
│ JSON / text summary / HTML / log     │
└──────────────────────────────────────┘
```

### 7.1 建议目录

```text
personal_idat_analyzer/
├── personal-idat
├── pyproject.toml
├── src/
│   └── personal_idat/
│       ├── cli.py
│       ├── config.py
│       ├── runner.py
│       ├── manifest.py
│       ├── report.py
│       ├── schema.py
│       ├── ida_entry.py
│       ├── ida_support/
│       │   ├── database.py
│       │   ├── decompile.py
│       │   ├── symbols.py
│       │   └── xrefs.py
│       └── analyzers/
│           ├── base.py
│           ├── metadata.py
│           ├── entrypoints.py
│           ├── protocol.py
│           ├── communication.py
│           ├── dangerous_calls.py
│           └── taint.py
├── profiles/
│   ├── quick.toml
│   ├── protocol.toml
│   ├── firmware.toml
│   └── vuln.toml
├── rules/
│   ├── io_apis.json
│   ├── protocol_seeds.json
│   ├── communication.json
│   └── dangerous_calls.json
├── report/
│   └── template.html
└── tests/
    ├── fixtures/
    ├── unit/
    └── integration/
```

### 7.2 运行清单

宿主进程应生成一次性 manifest，供 IDA 侧读取。manifest 至少包含：

```json
{
  "schema_version": "1.0",
  "run_id": "generated-id",
  "target": "/absolute/path/to/target",
  "database": "/cache/path/to/target.i64",
  "output_dir": "/absolute/path/to/output",
  "profile": "protocol",
  "read_only": true,
  "analyzers": ["metadata", "entrypoints", "protocol"],
  "rules": {
    "io_apis": "/absolute/path/to/io_apis.json"
  },
  "limits": {
    "timeout_sec": 1800,
    "max_functions": 500,
    "max_decompile_chars": 12000
  }
}
```

宿主应在无空格的临时目录创建 IDA bootstrap，并通过环境变量传递 manifest 路径，避免直接拼接复杂 `-S` 参数。

## 8. 功能需求

优先级定义：

- P0：最小可用版本必须具备。
- P1：形成日常可用价值。
- P2：增强分析深度。

### FR-001 CLI 与目标校验

优先级：P0

需求：

- 提供 `analyze` 子命令。
- 接受裸二进制、`.i64` 和 `.idb`。
- 支持显式指定 `idat`。
- 支持从配置、环境变量和 PATH 定位 `idat`。
- 校验目标可读、输出目录可写、`idat` 可执行。
- `--help` 不依赖 IDA 环境。

验收：

- 缺少目标、目标不存在或 `idat` 不可执行时返回非零退出码。
- 错误信息包含失败对象和修复所需信息。

### FR-002 隔离运行目录

优先级：P0

需求：

- 每次运行创建独立目录。
- 保存 manifest、IDA 输出、阶段结果和最终报告。
- 裸二进制数据库存入缓存目录。
- 已有 IDB 默认使用副本。
- 正常退出后保留报告，按配置清理临时文件。

验收：

- 默认运行不在目标目录创建数据库、锁文件或报告。
- 多个并发运行之间不共享临时状态。

### FR-003 idat 生命周期管理

优先级：P0

需求：

- 使用参数数组启动进程。
- 支持超时和退出码透传。
- 捕获 stdout、stderr。
- 保存完整原始输出。
- IDA 异常退出时仍生成失败报告。

验收：

- 超时后终止对应分析进程，不影响其他运行。
- 失败报告包含阶段、退出码、日志路径和已完成分析器。

### FR-004 IDA 环境初始化

优先级：P0

需求：

- 等待自动分析完成。
- 记录 IDA、IDAPython、处理器和位数信息。
- 检测 Hex-Rays 是否可用。
- Hex-Rays 不可用时，允许不依赖反编译器的分析器继续执行。

验收：

- 环境能力出现在 JSON `environment` 字段。
- 功能降级应记录原因，不伪装成空结果。

### FR-005 分析器注册与隔离

优先级：P0

需求：

- 分析器具有稳定名称、版本、依赖和执行入口。
- 支持 profile、`--only` 和 `--disable`。
- 自动解析依赖顺序。
- 单个分析器失败不终止其他无依赖分析器。
- 记录每个分析器的开始时间、结束时间、耗时和状态。

验收：

- JSON 能区分 `success`、`skipped`、`degraded` 和 `failed`。
- 循环依赖在启动前被检测。

### FR-006 二进制元数据

优先级：P0

需求：

- 输出文件名、大小和 SHA-256。
- 输出格式、架构、位数、字节序和加载基址。
- 输出 IDB 路径、IDA 版本和生成时间。
- 地址统一序列化为十六进制字符串。

验收：

- 相同输入的 SHA-256 和静态元数据保持一致。
- 地址不会因 JavaScript 数字精度损失。

### FR-007 I/O 入口发现

优先级：P0

需求：

- 从规则表读取 API 名称、平台、方向、缓冲区参数和长度参数。
- 通过符号和交叉引用定位调用点。
- 输出调用地址、调用者、API 和规则。
- 首版覆盖 POSIX、OpenSSL、mbedTLS、wolfSSL、Winsock 和 lwIP 常用入口。

验收：

- 对包含 `recv` 调用的测试样本能定位调用点和调用者函数。
- 相同调用点不能因别名规则重复输出。

### FR-008 反编译证据

优先级：P0

需求：

- 对入口所在函数进行反编译。
- 输出完整反编译文本或受限长度文本。
- 为每条发现生成局部代码片段。
- 反编译失败时回退到反汇编片段。
- 每个片段标记证据类型。

验收：

- 任一入口发现都至少包含反编译或反汇编证据。
- 截断结果明确包含 `truncated` 标志。

### FR-009 统一 JSON 报告

优先级：P0

需求：

- JSON 是唯一完整数据源。
- 顶层 schema 具有版本号。
- 输出通过临时文件写入后原子替换。
- 所有分析器结果位于独立命名空间。
- 错误和降级信息结构化保存。

验收：

- 失败运行也能生成合法 JSON。
- JSON 能通过项目内 schema 校验。

### FR-010 Profile 与规则系统

优先级：P1

需求：

- 提供 `quick`、`protocol`、`firmware`、`vuln` 四个内置 profile。
- profile 使用 TOML。
- API、seed、通信原语和危险函数规则使用 JSON。
- 支持用户目录覆盖内置 profile 和规则。
- 报告记录实际启用规则及其摘要。

验收：

- profile 中不存在的分析器名称应在启动前报错。
- 规则覆盖顺序稳定且能在报告中追溯。

### FR-011 Dispatcher 追踪

优先级：P1

需求：

- 从接收缓冲区寻找同函数内的直接下游调用。
- 排除日志、复制、分配等常见工具函数。
- 输出传递变量、调用目标和代码片段。
- 对发现路径标记 `direct_trace`。

验收：

- 测试样本中的 `recv → parse_packet` 能形成可复核关系。

### FR-012 协议格式推断

优先级：P1

需求：

- 检测 switch case。
- 检测 if-else 常量分发。
- 检测 `strcmp`、`memcmp` 等字符串或字节串分发。
- 检测 Magic 常量。
- 检测字节序转换和长度字段。
- 检测缓冲区字段偏移和访问宽度。
- 推断结果标记来源和置信度。

验收：

- 每个协议候选包含函数地址和代码证据。
- 无法确定字段语义时输出 `unknown`，不能强行命名。

### FR-013 通信面清单

优先级：P1

需求：

- 支持 socket、SysV IPC、POSIX IPC、D-Bus、MQTT 和串口。
- 尽力提取协议类型、角色、端口、地址、key、name、broker、topic、设备和波特率。
- 区分内联常量、参数、全局变量、配置来源和未知来源。

验收：

- 端口或波特率不是内联常量时，不得输出推测数值。
- 每条通道必须关联至少一个调用点。

### FR-014 文本摘要和 HTML

优先级：P1

需求：

- 文本摘要只展示高层统计和高价值发现。
- HTML 直接内嵌同一份 JSON。
- HTML 不重新实现分析逻辑。
- 外部可视化依赖不可用时，报告仍可查看原始数据。

验收：

- JSON 与 HTML 展示不存在数据源差异。
- 离线环境能查看主要表格和证据文本。

### FR-015 跨函数污点图

优先级：P2

需求：

- 以外部输入缓冲区为污点源。
- 函数作为节点，数据传递作为边。
- 区分 source、consume、transform、forward、boundary 和 sink。
- 支持最大深度、最大节点和超时限制。
- 首阶段允许近似传播，但必须标记分析方法。

验收：

- `recv → parser → dangerous_sink` 路径能序列化为稳定图结构。
- 达到限制时标记 `truncated`，不能静默停止。

### FR-016 IPC 边界闭合

优先级：P2

需求：

- 支持 `msgsnd → msgrcv`、`mq_send → mq_receive` 等同一二进制内边界闭合。
- 网络发送默认视为进程外终点。
- 每条闭合边记录发送和接收原语。

验收：

- 测试样本中的消息队列生产者和消费者能形成 boundary 边。

### FR-017 危险函数筛选

优先级：P2

需求：

- 通过规则识别命令执行、内存操作、格式化和路径操作等危险调用。
- 命令执行类默认完整报告。
- 其他类别按污点可达性排序。
- “污点可达”只能表示优先审计，不能直接声明漏洞成立。

验收：

- 报告明确区分危险 API、数据流重叠和已确认漏洞。

### FR-018 显式 IDB 写入模式

优先级：P2

需求：

- 支持在工作副本中写书签、注释和恢复后的符号名。
- 修改原始 IDB 需要独立的 `--in-place` 开关。
- 写入前生成备份或确认可恢复副本。
- 报告记录所有写入数量和类型。

验收：

- 未指定写入参数时，原始 IDB 哈希保持不变。

## 9. 数据契约

首版顶层结构：

```json
{
  "schema_version": "1.0",
  "run": {
    "id": "...",
    "status": "success",
    "started_at": "...",
    "finished_at": "...",
    "elapsed_sec": 0.0,
    "profile": "quick",
    "read_only": true
  },
  "input": {
    "path": "...",
    "sha256": "...",
    "size": 0
  },
  "environment": {
    "ida_version": "...",
    "idapython_version": "...",
    "hexrays": true,
    "processor": "...",
    "bits": 64,
    "endianness": "little",
    "image_base": "0x0"
  },
  "analyzers": {
    "metadata": {
      "status": "success",
      "version": "1",
      "elapsed_sec": 0.0,
      "result": {}
    },
    "entrypoints": {
      "status": "success",
      "version": "1",
      "elapsed_sec": 0.0,
      "result": {
        "entries": []
      }
    }
  },
  "errors": [],
  "warnings": []
}
```

通用发现结构：

```json
{
  "id": "finding-entrypoints-0001",
  "kind": "network_input",
  "address": "0x401234",
  "function": {
    "address": "0x401100",
    "name": "handle_client",
    "demangled_name": null
  },
  "source": {
    "analyzer": "entrypoints",
    "rule": "posix.recv",
    "method": "symbol_xref"
  },
  "confidence": "high",
  "evidence": [
    {
      "type": "decompile",
      "snippet": "recv(fd, buf, len, 0);",
      "truncated": false
    }
  ]
}
```

## 10. 非功能需求

### 10.1 可复现性

- 报告记录输入 SHA-256。
- 报告记录 IDA、分析器、profile 和规则版本。
- 分析器输出顺序应确定。
- 时间戳之外，相同环境和输入应产生语义一致的 JSON。

### 10.2 性能与限制

- 所有递归和图遍历必须有深度、节点数和时间限制。
- 每个分析器应支持单独超时或预算。
- 默认 profile 应适合常见中型 ELF。
- 大型二进制应能通过 profile 降低分析量。

### 10.3 错误处理

- 环境错误、输入错误、IDA 错误和分析器错误应分类。
- 禁止用空数组掩盖分析失败。
- 局部失败不能破坏已经生成的结果。
- 日志应包含异常上下文，但不得泄露无关环境变量和凭据。

### 10.4 兼容性

- 第一目标版本为维护者当前使用的 IDA 版本。
- IDA 9.x 作为首个兼容目标。
- IDA 8.x 兼容性在核心闭环稳定后评估。
- 不承诺无 Hex-Rays 时提供协议和污点分析。

### 10.5 可测试性

- 配置合并、规则加载、schema、文本解析和报告渲染应脱离 IDA 测试。
- IDA API 访问集中在 `ida_support`。
- 集成测试使用小型自编译 fixture。
- 每个已知协议模式至少有一个可重复样本。

## 11. 内置 Profile

### quick

- metadata
- entrypoints
- decompile evidence
- JSON
- text summary

### protocol

- quick
- dispatcher trace
- protocol format
- protocol seed
- optional taint

### firmware

- quick
- communication surface
- IPC
- MQTT
- serial
- crypto

### vuln

- protocol
- dangerous calls
- taint graph
- sink prioritization

## 12. 里程碑

### M0：工程骨架

交付：

- CLI。
- 配置模型。
- idat 定位。
- 隔离运行目录。
- manifest。
- 结构化错误。

完成标准：

- `--help` 可用。
- 缺少 IDA 时错误清晰。
- 不执行分析也能生成运行清单。

### M1：最小分析闭环

交付：

- IDA bootstrap。
- metadata 分析器。
- entrypoints 分析器。
- 反编译或反汇编证据。
- JSON 和日志。

完成标准：

- 对测试 ELF 定位 `recv` 调用点。
- 默认不修改原始目标和 IDB。
- 失败时仍生成合法报告。

### M2：日常协议分析

交付：

- profile。
- dispatcher 直接追踪。
- switch、if-else、字符串分发、Magic、长度字段。
- 文本摘要和 HTML。

完成标准：

- 能从受控样本输出命令字和 handler 候选。
- 每条推断可回到函数和代码片段。

### M3：固件通信面

交付：

- socket、IPC、D-Bus、MQTT 和串口清单。
- 通信规则系统。
- 来源类型和置信度。

完成标准：

- 能区分确定的内联值与配置来源。

### M4：数据流与漏洞优先级

交付：

- 跨函数污点图。
- IPC 边界闭合。
- 危险函数筛选。
- 图可视化。

完成标准：

- 受控样本能形成输入到 sink 的完整证据链。
- 报告不把启发式可达性描述为已确认漏洞。

### M5：显式写入能力

交付：

- 工作副本书签。
- 工作副本注释。
- C++ 名称恢复。
- 原始 IDB 写入保护。

完成标准：

- 默认模式保持原始 IDB 不变。
- 所有写操作可审计、可恢复。

## 13. 首版验收标准

版本 `0.1.0` 应满足：

1. 能分析一个包含 `recv` 的 64 位 ELF。
2. 能自动定位或显式使用 `idat`。
3. 能生成隔离的 IDA 数据库。
4. 能输出目标 SHA-256、架构、IDA 版本和 Hex-Rays 状态。
5. 能定位 `recv` 调用点和所属函数。
6. 能保存对应反编译或反汇编证据。
7. 能生成符合 schema 的 JSON。
8. 能在 IDA 或分析器失败时生成结构化失败报告。
9. 默认不修改目标文件和已有 IDB。
10. 纯 Python 模块具有自动化测试。

## 14. 风险与控制

| 风险 | 影响 | 控制 |
|---|---|---|
| IDA 版本 API 差异 | 脚本无法运行 | 集中封装 IDA API，记录兼容矩阵 |
| Hex-Rays 不可用 | 无法反编译 | 功能检测、降级反汇编、明确标记 |
| stripped 二进制缺少符号 | 入口漏检 | 导入表、字符串、调用特征和手动 seed |
| 文本正则误报 | 协议结论不可靠 | 保留证据、置信度分级、逐步迁移 ctree |
| 污点传播不精确 | 漏报或误报 | 标注近似方法、限制结论、保留代码片段 |
| 大型二进制耗时过长 | 无法日常使用 | profile、预算、缓存、超时和节点上限 |
| 直接操作 IDB | 数据丢失 | 默认副本、显式写入、备份、写入审计 |
| 参数路径包含空格 | idat 启动失败 | 临时 bootstrap、manifest 环境变量 |
| 第三方规则许可证 | 分发限制 | 规则来源和许可证独立登记 |
| 文档与 CLI 漂移 | 使用方式失真 | CLI 单一参数模型、自动生成帮助和配置说明 |

## 15. 参考项目取舍

应保留：

- 宿主 CLI 启动 `idat` 的总体模式。
- API 和通信原语规则化。
- 默认只读。
- JSON 作为完整数据源。
- 发现附带地址、函数和反编译片段。
- 污点图使用稳定节点和边契约。

应重新设计：

- 不在单个主脚本中集中编排、规则、分析和输出。
- 不重复定义宿主 CLI 与 IDA 侧参数。
- 不直接拼接复杂 `-S` 参数。
- 不默认删除 IDA 锁文件。
- 不默认在目标旁创建数据库。
- 不让单个分析器异常终止全部分析。
- 不把文本正则结果描述为精确数据流。
- 不依赖手写文档同步参数和规则状态。

## 16. 延后决策

以下事项不阻塞 `0.1.0`：

- ctree 与 microcode 的最终抽象层。
- HTML 图形库。
- 是否支持 Ghidra 或 Binary Ninja。
- 跨二进制、跨进程通信关系。
- LLM 自动调用方式。
- IDA 插件形态。
- 远程分析和队列调度。

首版默认选择：

- 本地 CLI。
- IDA 9.x。
- TOML profile。
- JSON 规则和报告。
- 单机串行执行。
- 只读数据库副本。
- 人工或外部工具消费 JSON。

## 17. 产品成功标准

产品达到日常可用状态时，应满足：

- 一条命令完成目标准备、IDA 分析和报告输出。
- 常见入口、协议分发和通信面不再依赖重复手工检索。
- 任一自动结论都能快速回到地址和代码证据。
- 个人习惯主要通过 profile 和规则调整，不需要频繁修改框架代码。
- 新分析器可以独立添加，不破坏既有分析器和 JSON 契约。
- 同一目标的分析结果可以复现、比较和交给下游 LLM 消费。
