import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-leaflet', 'leaflet']
  },
  server: {
    port: 3000,
    host: true
  }
});