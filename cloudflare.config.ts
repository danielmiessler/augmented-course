import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "augmented-course",
		compatibilityDate: "2026-11-28",
		// One public URL only: no workers.dev or preview twin.
		workersDev: false,
		previewUrls: false,
		domains: ["augmented.unsupervised-learning.com"],
	},
});
