// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://augmented.unsupervised-learning.com',
  output: 'static',
  integrations: [react()],
  server: {
    port: 5176
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
