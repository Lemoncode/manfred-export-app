import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$pods: resolve('src/pods'),
			$scenes: resolve('src/scenes')
		},
		adapter: adapter(),
		files: {
			routes: 'src/scenes'
		}
	}
};

export default config;
