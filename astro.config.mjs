import { PORT, SITE } from './src/consts';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  server: {
    port: PORT
  }

});
