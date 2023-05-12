import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/PJiang93',
  base: '/pjiang.github.io',
  integrations: [mdx(), sitemap(), tailwind(),     
    partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  }),]
});
// https://astro.build/config
// export default defineConfig({
//   site: 'https://astro-modern-personal-website.netlify.app',
//   integrations: [mdx(), sitemap(), tailwind()]
// });