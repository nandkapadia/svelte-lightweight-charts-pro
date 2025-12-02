import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LightweightChartsPro',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal', 'lightweight-charts'],
      output: {
        globals: {
          svelte: 'Svelte',
          'lightweight-charts': 'LightweightCharts',
        },
      },
    },
    sourcemap: true,
  },
});
