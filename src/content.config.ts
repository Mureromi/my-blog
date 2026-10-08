import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // 从 src/content/posts 下递归读取所有 .md 文件
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  // 用 Zod 校验每篇文章的 frontmatter
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // 自动把 "2026-10-08" 转成 Date
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // true 的草稿不发布
  }),
});

export const collections = { posts };
