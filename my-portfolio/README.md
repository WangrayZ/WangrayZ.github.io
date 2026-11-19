# 王睿泽 · 个人作品集（Eleventy）

由原来的多页 HTML 迁移而来。内容（文字 + 图片）全部保留，视觉沿用原来的暗房风。

## 结构

```
my-portfolio/
├── src/
│   ├── index.njk                 首页（封面 + 作品列表）
│   ├── about.md                  自我介绍 / 荣誉 / 联系
│   ├── projects/
│   │   ├── quanzhou.md           泉州先锋书店改造设计
│   │   ├── jinxianghe.md         悬台筑院
│   │   ├── hope.md               金陵何处望长江
│   │   ├── df.md                 增感街道
│   │   ├── srtp.md               智绘视界 SkyLens-AI
│   │   └── photography.md        摄影
│   ├── _includes/                模板（base / project / photo / page / lightbox）
│   └── assets/                   style.css、main.js、i18n.js、archive.js、photo.js
├── public/imgs/                  所有网页图片（/imgs/xxx.jpg）
├── eleventy.config.js
├── package.json
└── server.mjs                    本地预览服务器（含 /files/ 原始资料映射）
```

## 命令

```bash
# 安装（本机已装好，可跳过）
pnpm install

# 构建到 _site/
pnpm build

# 本地预览（推荐，含原始资料下载）
node server.mjs        # http://127.0.0.1:4173
```

## 说明

- 页面正文以 Markdown 文件保存，为保证版式与原来的 class/结构完全一致，正文内部保留了原有 HTML 片段（`templateEngineOverride: njk`，不再经过 Markdown 解析）。
- 图片统一放在 `public/imgs/`，页面引用 `/imgs/…`。
- 原始资料（PDF / DOCX / 原始照片文件夹 / DWG）不复制进构建产物；`server.mjs` 把 `/files/…` 映射到仓库上一级目录，因此预览时链接仍可打开。部署到静态主机时，需要把对应文件放进 `public/files/` 或改为外链。
- 中英切换由 `src/assets/i18n.js` 完成，按钮为 `.lang`。
- 旧的合并版单页 `index.html` 与 `_legacy/` 中的原始页面均保留在仓库根目录，作为内容备份。
