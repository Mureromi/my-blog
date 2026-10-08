// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 上线后改成你的真实域名（Vercel 地址或自定义域名，RSS / SEO 需要），本地开发可先留空
  site: 'https://your-name.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
