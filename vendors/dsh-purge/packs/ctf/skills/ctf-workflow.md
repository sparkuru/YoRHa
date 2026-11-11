---
name: ctf-workflow
description: CTF 题目分诊与通用工作流（占位技能）：题型识别、附件清点、flag 验证、writeup 结构。
---

# CTF Workflow

CTF 模式的通用入口技能。先读题面和附件，再决定加载哪个专项技能。

## 1. 分诊

- 记录题目名称、分类、分值、flag 格式、附件路径、目标地址。
- 分类：web / pwn / crypto / misc / forensics / rev。
- 明确题目给出的信息：源码、二进制、pcap、日志、远程地址、容器。

## 2. 选择专项技能

- Web：`ctf-web`
- Pwn：`ctf-pwn`
- Crypto：`ctf-crypto`
- Misc：`ctf-misc`
- Forensics：`ctf-forensics`
- Reverse：`ctf-rev` / `reverse` 模式

## 3. 执行与留痕

- 每条命令保存到题目工作目录的 `notes.md`。
- 关键输出、脚本、payload、截图路径一并记录。
- 得到 flag 后先验证格式和来源，再写入 `writeup.md`。

## 4. 输出

```text
flag:
题目:
分类:
关键步骤:
复现命令:
附件/脚本:
```
