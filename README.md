# 个人博客

用 Markdown 写文章的静态博客：**Astro 5 + Tailwind CSS 4 + Giscus 评论 + Vercel 部署**。
完整设计与实施步骤见 [实现文档.md](./实现文档.md)。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装依赖 |
| `npm run dev` | 本地开发，浏览器打开 http://localhost:4321 |
| `npm run build` | 构建静态站点到 `dist/` |
| `npm run preview` | 本地预览构建产物 |

## 写作

文章在 `src/content/posts/` 下，一篇一个 `.md` 文件，文件名即 URL 的 slug（建议英文文件名，标题写在 frontmatter）：

```md
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-10-08
tags: [标签1, 标签2]
draft: false        # true 则不发布
---

正文（Markdown）……
```

## 待办（见实现文档第 11 节）

- [ ] Giscus：按文档 6.7 节完成 GitHub 准备后，替换 `src/components/Giscus.astro` 里的 4 个占位配置（repo / repo-id / category / category-id）
- [ ] `astro.config.mjs` 里的 `site` 改成真实域名
- [ ] 推送 GitHub 并接入 Vercel（文档第 9 节）
