# Ghidra MCP

这是原 Ghidra headless 项目在 yorha 中的保留位置。将来可在此实现独立 MCP Server，通过 DSH 或其他 MCP 客户端接入。

当前保留：

- `legacy-plan.md`：原项目的分析思路与目标，属于历史设计。
- `references/`：Ghidra headless 使用说明、Ghidra API 示例以及相应来源和许可信息。
- `local/`：可选的本机 Ghidra 安装与个人资料，由 Git 忽略。

当前没有 Ghidra MCP Server，尚未实现启动、项目管理或工具调用。分析能力应以单独进程运行，默认不修改原始输入，并在实现时记录引擎版本与分析结果来源。
