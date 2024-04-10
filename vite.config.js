import { defineConfig } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    imageminPlugin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      images: '/src/images',
    },
  },
  base: '/Crypto-Exchange/',
});
