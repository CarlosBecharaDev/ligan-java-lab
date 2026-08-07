// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://ligan-java-lab.vercel.app',
  // El sitio sigue siendo estático por defecto (output: 'static'); el
  // adaptador solo habilita las rutas puntuales marcadas con
  // `export const prerender = false` (ej. src/pages/api/execute.ts) para
  // que corran como función serverless en Vercel. El resto del build no
  // cambia: mismo `npm run build`, mismo despliegue en Vercel.
  adapter: vercel(),
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
