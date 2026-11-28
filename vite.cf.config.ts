import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

// Astro builds the static site into dist/; this bundles it as Worker static assets for cf.
export default defineConfig({
	publicDir: "dist",
	plugins: [cloudflare()],
});
