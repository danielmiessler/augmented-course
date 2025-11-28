// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  server: {
    port: 5176
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
