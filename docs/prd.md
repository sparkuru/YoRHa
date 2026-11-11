# yorha 产品与架构设计

> 状态：产品和架构主线草案，供后续实现与验证使用。文中的目录、配置格式和接口均为设计目标。

## 1. 产品定位

基于 DeepSeek Harness（DSH）构建可自行维护的 Agent Workbench。用户以原生 DSH 为基础，选择不同 Mode 构建专注于特定任务的独立实例，在实例内组织工作区、资源、会话和 Agent 能力。

本项目保留现有 dsh-purge 及其第三方内容的来源和许可声明，以已有可追溯源码为基础维护；不将自己的版本表述为原作者官方版本。DSH、dsh-purge 和本项目的集成层是不同组件，各自的版本和许可需要分别记录。

### 主要目标

- 保留 DSH 原生会话、工作区及 Agent 工作流程，允许用户设计自己的流程。
- 通过 Mode 描述一个 DSH 实例如何构建、配置和修改，包括原生、purge 和不同的 custom 方案。
- 以实例为单位组织工作，可同时运行、切换、停止、归档和恢复多个实例。
- 通过 Pack 组合面向特定领域的 Agent 配置、Skill 和其他能力。
- 接入 MCP、外部 Skill 框架和自定义 Provider。
- 对补丁和实例构建结果保留版本、来源、状态和恢复依据。

### 范围与阶段

第一阶段优先支持本机或现有服务器上的 Web Workbench，以及围绕 DSH 的实例、Mode、Pack 和 Provider 管理。界面、终端、MCP、外部框架的能力按验证结果分阶段实现。

Slack / Discord 式布局是交互参考；未来可以探索与 Mattermost 等平台集成，但具体平台、集成方式和多人协作模型尚未确定。容器或远程工作机是未来可选的运行方式，不是创建实例的前置条件，也不是 Mode 分类方式。

## 2. 核心概念

| 概念 | 定义 | 示例 |
| --- | --- | --- |
| DSH base | 选定版本的 DeepSeek Harness 基础安装 | `0.2.1-rc.5` |
| Mode | 描述如何基于 DSH 创建和配置实例的版本化方案 | `official`、`purge`、`custom1` |
| Instance / Workbench | 围绕某项工作创建的独立运行环境与数据集合 | `CTF 训练`、`项目 A 审查` |
| DSH 工作区 | 实例内部使用的 DSH 原生工作区概念 | 一个项目的工作目录及其上下文 |
| Session | 实例内的一条对话或任务线 | `程序分析`、`解题记录` |
| Pack | 组合 Agent 配置、工作流、Skill 及可选扩展的可复用能力包 | `ctf`、`reverse`、`report` |
| Skill | Agent 使用某种能力或完成某类任务的工作方法 | `rea` |
| MCP | Agent 连接外部工具、资源或服务的协议及服务接入 | 分析、检索等工具服务 |
| Provider | 模型服务连接定义，及其模型和凭据引用 | DeepSeek、OpenCode Go / Zen、自定义服务 |
| 资源 | 实例关联的工作目录、参考资料、附件或其他数据 | `/work/ctf-training` |

已有代码中的 preset、pack 等原有名称保持其上下文含义，不假定新的 Pack 格式已与现有格式兼容。

一个 Mode 可用于创建多个实例；一个实例可启用多个 Pack，包含多个 Session，并关联多个资源。模式并不按权限大小排序；`purge` 和不同 `custom` 可以修改不同内容，或只添加工作流。

## 3. 用户体验

### 主流程

```text
登录
  → 选择 Mode
  → 选择该 Mode 支持的 DSH base 版本
  → 新建实例，或从已有实例复制配置
  → 系统根据 Mode 及相关配置确定 Pack、Skill、MCP 和 Provider
  → 用户可现在添加工作区资源，也可在创建后添加
  → 查看实例创建计划
  → 准备 DSH、导入配置和能力、应用并验证补丁
  → 进入实例工作台
  → 创建 Session、与 Agent 交互、查看资源与结果
  → 切换、停止、归档、恢复或删除实例
```

### 工作台布局

- **最左侧实例栏**：列出实例、运行状态及创建入口；切换当前工作台，不等于停止其他实例。
- **实例侧栏**：当前实例的 Session、DSH 工作区和关联资源。
- **中央区域**：Agent 对话、执行过程和 Prompt 输入框，尽量复用 DSH 原生交互。
- **右侧上下文区域**：查看实例与任务信息、文件、Diff，以及按能力提供的编辑和其他面板。
- **全局管理入口**：Mode、Pack、Skill、MCP、Provider、登录和实例管理。

终端是目标能力之一：需定义服务端执行位置、用户身份、连接、权限和生命周期，再纳入界面。文件编辑、Diff、终端和 DSH 原生前端扩展的具体接入方式均待技术验证。

## 4. Mode 与实例化

Mode 是版本化的实例构建说明包，而不是正在运行的实例。每个 Mode 可以包含自身的配置模板、资产、工作流和补丁，并引用公共 Pack、Skill、MCP 或 Provider 定义。

```text
modes/
├── official/
│   ├── mode.yml
│   └── templates/
├── purge/
│   ├── mode.yml
│   ├── patches/
│   ├── templates/
│   └── assets/
├── custom1/
│   ├── mode.yml
│   ├── workflows/
│   └── templates/
└── custom2/
    ├── mode.yml
    ├── patches/
    ├── workflows/
    └── assets/
```

图中的 `mode.yml` 为设计示意，当前草稿使用 `mode.json`，最终格式待设计。清单至少需要表达：Mode 身份与版本、兼容的 DSH base 版本、配置与资产、适用补丁、必需 / 默认 / 可选的 Pack 和外部能力。仅属于一个 Mode 的内容放在其目录；可复用能力存放于公共目录并按版本引用。

### Mode 示例

- **official**：以 DSH 原生版本为基线。Workbench 接入可能仍需管理组件或扩展，因此应分别描述“DSH 核心是否修改”和“是否加载额外扩展”。
- **purge**：应用 dsh-purge 对应版本的适配和补丁，具体变化以所选补丁清单及实际结果为准。
- **custom1**：例如只添加用户自定义 workflow，不修改 DSH 宿主代码。
- **custom2**：例如包含不同的宿主补丁、配置和 Pack 组合。

### 版本与创建规则

1. 创建时展示 Mode 声明支持的 DSH 版本。未验证版本不能显示为已兼容。
2. 系统根据 Mode 和相关配置确定 Pack、Skill、MCP、Provider 及其依赖；创建流程不要求用户逐项选择。缺少必需配置或依赖时展示具体状态，按实际需要补齐；可选能力不可用时如实报告。
3. 用户可以在创建时添加工作区资源，也可以先不添加，稍后在实例内手动关联。
4. 在写入实例前生成计划：来源、版本、下载、导入、补丁、依赖和目标位置。
5. 检查下载与待修改文件的身份；补丁目标或前置条件不匹配时停止并报告。
6. 完成后记录 DSH、Mode、Pack、Skill、MCP、Provider 定义、补丁及模板的实际版本或内容哈希，以及应用结果。
7. Mode 更新不自动改变已有实例；实例升级应先展示差异，明确执行，支持失败恢复。
8. 从现有实例复制时，分别选择配置、会话、实例私有数据和资源引用的处理方式；默认不能隐式复制凭据或复制外部目录。

## 5. 实例、工作区与生命周期

实例持有自己的配置快照、DSH profile / home、Session、补丁状态和实例私有数据。不同实例可使用同一个 Mode，也可同时运行不同 Mode。

实例关联的外部工作目录默认是引用，不自动复制到实例目录。多个实例可以显式关联同一目录并通过文件协作；各自的会话、上下文和工具状态不会因此自动共享。并发修改同一文件存在冲突，可使用独立输出目录、Git 分支或 worktree 协作。

一个实例可关联主工作区和其他资源；资源可以在创建时添加，也可以在创建后手动添加。未添加用户资源时应仍能创建实例；如果目标 DSH 版本启动时需要目录，如何提供实例自有的初始工作目录需验证。DSH 多目录工作区、额外资源对 Agent 的可见性与访问行为也需针对目标版本验证。界面上展示的资源列表本身不构成操作系统访问限制。

| 操作 | 预期行为 |
| --- | --- |
| 创建 | 按固定 Mode、DSH 和能力版本生成独立实例，并记录结果 |
| 启动 / 停止 | 管理实例运行状态；停止不删除数据 |
| 切换 | 切换界面当前实例；其他实例是否继续运行应可见 |
| 归档 | 保存实例配置、会话及选定的私有数据，记录外部资源处理方式 |
| 恢复 | 从完整归档恢复实例，并检查版本、依赖和资源可用性 |
| 删除 | 明确列出实例自有数据和外部引用；默认不删除被引用的外部目录 |

归档需区分“仅记录外部路径”和“把外部内容复制进归档”，并明确凭据、敏感信息和可重建缓存的处理。归档是否包含运行程序和外部框架数据，应由归档清单说明。

## 6. Pack、Skill、MCP 与外部框架

Pack 是工作能力的组合单位；Skill 是工作指引；MCP 是连接工具和资源的接口；外部控制器及分析引擎负责实际执行。它们的安装、启用和就绪状态应分别显示。

- 全局目录登记可安装或已安装的 Pack、Skill、MCP 和外部集成。
- Mode 和相关配置声明默认、必需或可选能力；系统据此确定实例能力，实例保存最终启用的版本和配置。
- Pack 可以引用外部 Skill 和 MCP，不要求把它们的实现复制进 Pack。
- 更改公共能力时不能悄悄改变已有实例；使用版本或内容哈希锁定。
- Pack 缺少可选依赖时，应显示可用能力和缺失项，而不是一律声称整个 Pack 已就绪。

### REA 示例

`reverse` Pack 可选择接入 REA Skill、`rectl` 控制器、相应 MCP 接口和分析引擎。安装 Skill 本身不等于这些依赖已经安装或可用。实例中的 REA 会话、证据和输出应与其他实例分开。

当前所查 REA Skill 明确列出的客户端是 Codex、Claude Code 和 OpenCode；DSH 接入、客户端识别、MCP 连接及工作区绑定需单独验证或适配。不得将设计示意写成已经支持。

## 7. Provider 与凭据

- 内置配置方向：DeepSeek API、OpenCode Go、OpenCode Zen，以及自定义 Provider。
- Provider 定义可复用；系统根据配置为实例确定 Provider、模型和凭据引用。
- 自定义 Provider 需声明协议和实际支持的能力，不假定任意 URL 都兼容。
- Key 与普通配置分离；界面只展示是否配置，不回显完整凭据；日志、导出和归档应避免意外包含凭据。
- 模型和服务的可用性、协议及凭据要求应以实际服务和目标 DSH 适配结果为准。

## 8. 补丁、隔离与实际能力

`purge`、`custom` 可以修改不同层面的 DSH 行为。Mode 清单和实例状态应报告实际采用的补丁，而不根据名称推断所有行为。

补丁引擎目标包括 `plan`、`apply`、`status`、`restore`：

- 记录目标版本、实例、规则、前后哈希、备份和执行结果。
- 修改前备份；中途失败时记录不完整状态，并提供恢复路径。
- 恢复时检查文件是否在补丁应用后被其他操作更改；存在冲突时停止，不静默覆盖。
- 第一阶段为实例准备互不干扰的可写运行文件；共享基础内容时必须验证链接或包管理器不会让修改跨实例生效。

DSH 内部的流程、审批和沙箱行为与进程实际系统权限是不同层面。Skill 文本本身不是强制权限边界；MCP Server 和外部控制器可能以独立权限运行。Workbench 应说明实例的运行位置、工作目录和外部连接的实际能力；是否引入容器或其他隔离环境，由具体部署方案决定，不作为 Mode 的默认含义。

## 9. 项目源码目录目标

```text
yorha/
├── readme.md
├── license / licenses-notice.md
├── docs/                         # 架构、兼容性、运维及来源说明
├── apps/
│   ├── cli/                     # 命令行入口
│   ├── gateway/                 # 登录、会话与代理
│   ├── manager/                 # 实例管理服务
│   └── web/                     # Workbench 界面
├── packages/
│   ├── dsh-adapter/
│   ├── runtime-manager/
│   ├── instance-manager/
│   ├── mode-manager/
│   ├── patch-engine/
│   ├── pack-manager/
│   ├── skill-manager/
│   ├── mcp-manager/
│   ├── provider-manager/
│   └── config/
├── modes/                       # official / purge / custom1 / ...
├── mcps/                        # Ghidra、IDA 等 MCP 能力
├── packs/                       # ctf / reverse / redteam / exploit / report
├── integrations/                # Skills、MCP、Provider 外部接入定义
├── configs/                     # 示例配置
├── vendors/dsh-purge/           # 保留来源的上游源码及维护材料
├── recovery/                    # 本地原始归档和校验材料，不纳入 Git
├── tests/
├── scripts/
└── deploy/
```

目录表达职责，不要求一次性建立所有目录或预先确定语言、框架与进程拆分。

## 10. 运行数据与 CTF 训练参考实例

```text
<data-root>/
├── catalog/
│   ├── modes/<mode>/<version>/
│   ├── packs/<pack>/<version>/
│   ├── skills/<skill>/<version>/
│   ├── mcp/<server>/<version>/
│   └── integrations/<integration>/<version>/
├── dsh-base/<dsh-version>/       # 基础包、来源及校验记录
├── instances/
│   └── ctf-training/
│       ├── instance.yml         # Mode、资源、实际能力配置
│       ├── manifest.lock.yml    # 构建结果和实际版本
│       ├── runtime/             # 实例私有的 DSH 可写运行文件
│       ├── dsh-home/            # DSH profile、Session 及 Skill 配置
│       ├── config/               # 实例生成配置
│       ├── state/patches/        # 补丁和实例状态
│       ├── backups/patches/      # 本实例补丁恢复材料
│       ├── data/                 # Pack 和集成的实例数据
│       ├── artifacts/            # 实例拥有的输出
│       └── logs/
├── providers/                    # Provider 定义和凭据引用
├── manager/                      # 管理服务配置及状态
├── archives/
└── cache/
```

参考实例：Mode 为 `purge`，DSH base 为 `0.2.1-rc.5`；系统根据配置确定 `ctf`、`reverse`、`report` Pack，以及 OpenCode Go Provider；REA Skill / MCP 依配置与就绪状态接入。用户可在创建时关联题目和参考资料目录，也可稍后添加。配置格式和兼容性仍需实现及验证。

## 11. 实施顺序与验收主线

1. **来源基线**：保留原始归档、许可和校验记录；明确现有快照与原始归档的差异，建立可追溯的维护版本。
2. **技术验证**：确认 DSH 的工作区、会话、前端扩展、多实例、Skill 和 MCP 接口；评估现有 purge 补丁与恢复机制。
3. **实例与 Mode 核心**：选定版本、构建计划、独立安装、补丁应用与恢复；至少能并行运行并区分两个实例。
4. **Pack 和 Provider**：迁移或适配现有 Pack 机制，配置 DeepSeek、OpenCode Go / Zen 和明确支持协议的自定义 Provider。
5. **Workbench 界面**：登录、实例列表与切换、会话和工作区；逐步验证文件面板、Diff、编辑与终端。
6. **外部能力与生命周期**：Skill / MCP 状态、REA 适配、实例归档恢复及资源处理。

主线验收：系统能根据配置确定实例能力；用户能基于已验证的 Mode 和 DSH 版本创建实例，并可在创建时或之后添加工作区资源，理解创建内容，进入对应 DSH 会话，区分并切换两个实例，停止和恢复实例，并在不影响其他实例或外部目录的前提下处理其自有数据。

## 12. 待验证和决策

- DSH 原生前端能否稳定承载实例栏、右侧面板及多实例连接；不足时选择前端补丁或独立界面。
- 多目录工作区、Session 查询和文件 / Diff / 终端接口的真实能力及版本边界。
- DSH 对目标 MCP、外部 Skill 和 REA 控制器注册的支持；连接成功与实际分析能力需分别验证。
- 实例进程、代理、Cookie、WebSocket 路由及断线恢复方案。
- Mode / Pack 配置格式、补丁粒度、实例升级与部分失败恢复机制。
- 上游源码归属、额外商业声明与 Apache-2.0 文本之间的关系；公开分发或商业化前进行适当的法律核对。

现有材料和查证入口见 [sources.md](sources.md)。
