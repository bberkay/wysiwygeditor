import { resolve } from 'path'
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
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

