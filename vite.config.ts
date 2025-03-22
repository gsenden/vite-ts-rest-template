// vite.config.ts
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
	plugins: [
		...VitePluginNode({
			adapter: 'express',
			appPath: './src/main.ts',
			exportName: 'app',
			tsCompiler: 'esbuild',
		}),
	],
	server: {
		port: 3000,
	},
	optimizeDeps: {
		// Vite does not handle node: protocol dependencies by default
		exclude: ['express'],
	},
	build: {
		target: 'esnext',
	},
});
