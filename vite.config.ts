import { defineConfig } from 'vite';

const config = defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: { input: ['./index.html', './index2.html'] },
  },
});

export default config;
