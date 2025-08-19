import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ui-components-demo/',  // <-- add this for GitHub Pages deployment
  build: {
    outDir: 'dist',  // folder where build output goes
  },
});
