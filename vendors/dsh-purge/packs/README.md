# dsh-purge 模式包

每个子目录只要同时包含以下两个文件，就会被 dsh-purge 启动时自动发现并注册：

```text
packs/<id>/
├── preset.yml          # id, name, description, order
├── agent.cordis.yml    # agent 平面：人设、工具行
├── skills/*.md         # 可选，自动同步到 $DSH_HOME/<id>/skills
└── anchor-gate.mjs     # 可选，供 agent.cordis.yml 的 ./anchor-gate.mjs 使用
```

没有 `preset.yml` 或 `agent.cordis.yml` 的目录会被跳过，所以空目录可以安全占位。

当前：

- `redteam/`：红队模式，已有完整 preset + 23 个 skills
- `ctf/`：CTF 模式脚手架，已有 preset + 1 个通用工作流 skill
- `reverse/`：占位
- `exploit/`：占位
- `report/`：占位

## 新增一个模式

```text
packs/my-mode/
├── preset.yml
├── agent.cordis.yml
└── skills/
    └── my-first-skill.md
```

`preset.yml` 最小示例：

```yaml
id: my-mode
name: My Mode
description: 一句话说明
order: 30
```

`agent.cordis.yml` 可以从 `redteam` 或 `ctf` 复制后修改；相对模块（如 `./anchor-gate.mjs`）会按 pack 目录解析。

启动后检查：

```bash
cat "$DSH_HOME/modes/preset-declare.json"
ls "$DSH_HOME/.agent-presets"
ls "$DSH_HOME/my-mode/skills"
```

宿主只认 `agentPresets.register()`，不会自动扫描 `.agent-presets`；自动注册由 `lib/redteam/index.js` 的 `discoverPacks()` 完成。

## 注意

- `preset.yml` 的 `id` 必须匹配 `^[a-z][a-z0-9-]*$`。
- 同名 ID 只保留一个；目前按目录名扫描，重复时先发现的生效。
- 修改 pack 后重启 dsh 才会重新注册。
- 目前自动扫描只覆盖 preset + skills；host 侧的 store/UI 仍需在 `cordis.patch.yml` 中注册。
