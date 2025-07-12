import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  // The build section is the important addition!
  build: {
    outDir: '../backend/dist',   // This will place your build in backend/dist
    emptyOutDir: true            // This ensures old files are removed on each build
  }
});
