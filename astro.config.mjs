import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'http://localhost:3000',
  vite: {
    ssr: {
      noExternal: ['@portabletext/svelte'],
    },
  },
  integrations: [
    tailwind(),
    svelte(),
    prefetch(),
    react(),
    partytown(),
    robotsTxt(),
  ],
});
