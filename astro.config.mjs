import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://github.com/PJiang93',
  //base: '/pjiang.github.io',
  integrations: [mdx(), sitemap(), tailwind()]

})
// https://astro.build/config
// export default defineConfig({
//   site: 'https://astro-modern-personal-website.netlify.app',
//   integrations: [mdx(), sitemap(), tailwind()]
// });