import { resolve } from 'path'
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    copy({
      targets: [{ src: 'lib/index.d.ts', dest: 'dist', rename: 'wysiwygeditor.d.ts' }]
    })
  ],
  build:{
      lib: {
        entry: resolve(__dirname, 'lib/index.js'),
        name: 'WYSIWYGEditor',
        filename: 'wysiwygeditor',
      },
      rollupOptions: {},
      minify: 'esbuild',
    },
});

