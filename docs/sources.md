# 来源和维护基线

## dsh-purge

- 声明来源：`HunYiSage/dsh-purge`，版本 1.1.92，commit `fc6e787dda5cfbc48c342cf427831b403239b866`，这些身份来自原有本地记录，尚未用独立上游副本核验。
- 本机的 `recovery/dsh-purge-fc6e787-source.tar.gz` 是原始源码归档；`recovery/dsh-purge-1.1.92.tgz` 是从维护快照构建的安装包。两个归档与各自同目录 SHA-256 记录一致。这只能证明文件和本地记录一致。`recovery/` 不纳入 Git。
- `vendors/dsh-purge` 包含当前维护快照。逐文件比较原始归档，5 个文件内容改变、34 个文件新增、无文件缺失。改变的文件是 `cordis.patch.yml`、`lib/preset-default.js`、`lib/redteam/index.js`、`lib/redteam/preset-composition.js`、`package.json`。
- 原始归档的包版本与当前维护快照均标记为 1.1.92，不能因此认定它们内容相同。安装包中的 153 个文件与当前 vendor 中对应文件一致。
- vendor 自带 `LICENSE`、`NOTICE`、`LICENSE-COMMERCIAL.md` 及其第三方声明，迁移时保留。上游的商业声明与 Apache-2.0 文本的关系需要在对外分发或商业使用时单独核对。
- `scripts/embed-default-prompt.mjs` 所引用的原始 `lib/default-prompt-inject.md` 不在维护快照中，提示词输入的可重建性尚未验证。

## 逆向资料

- `mcps/ghidra/legacy-plan.md` 是 Ghidra headless 项目的原始设想。
- `mcps/ghidra/references/ghidra-headless-readme.html` 来自本地 Ghidra 11.1.2 发行包；同目录保留 Ghidra 许可文本。
- `mcps/ghidra/references/ghidra-snippet.md` 为 [HackOvert/GhidraSnippets](https://github.com/HackOvert/GhidraSnippets) 的本地参考副本，上游页面标记为 CC0-1.0。
- `mcps/ida/legacy-prd.md` 是 IDA 静态分析需求草稿。

DSH 的运行时、Ghidra 的本机发行包、用户会话与凭据不随 yorha 发布。
