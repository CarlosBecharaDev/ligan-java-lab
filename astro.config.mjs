// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ligan-java-lab.vercel.app',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      // Java incluido por defecto en Shiki; se configura explícitamente para asegurar soporte
      // @ts-ignore — Shiki acepta strings como IDs de idioma
      langs: ['java'],
    },
  },
});
