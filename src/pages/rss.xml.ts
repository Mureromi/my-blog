import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // 部署在子路径（GitHub Pages 项目页）时给文章链接补前缀
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const posts = (await getCollection('posts'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: '我的博客',
    description: '关于技术、生活与思考',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/posts/${post.id}/`,
    })),
  });
}
