// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],
  server: {
    port: 5176
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
