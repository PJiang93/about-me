import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://peng.jiang.com'
})
// https://astro.build/config
// export default defineConfig({
//   site: 'https://astro-modern-personal-website.netlify.app',
//   integrations: [mdx(), sitemap(), tailwind()]
// });