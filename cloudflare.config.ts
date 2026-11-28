import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "augmented-course",
		compatibilityDate: "2026-11-28",
		// One public URL only: no workers.dev or preview twin.
		workersDev: false,
		previewUrls: false,
		// Replaces the Pages-era _redirects rewrite (/* /index.html): every unknown path serves the home page.
		assets: { notFoundHandling: "single-page-application" },
		domains: ["augmented.unsupervised-learning.com"],
	},
});
