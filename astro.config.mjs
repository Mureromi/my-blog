// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages 项目页（仓库 mureromi/my-blog）地址：https://mureromi.github.io/my-blog/
  // 如果想要根地址 https://mureromi.github.io/：把仓库改名为 mureromi.github.io，
  // 然后删掉下面的 base 行、把 site 改为 'https://mureromi.github.io'
  site: 'https://mureromi.github.io',
  base: '/my-blog',
  markdown: {
    // 代码块双主题：默认亮色配色，html.dark 时切换（见 global.css 末尾）
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
