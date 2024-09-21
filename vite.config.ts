import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Create a separate chunk for React
          react: ['react'],
          // Create a separate chunk for React DOM
          'react-dom': ['react-dom'],
          // Create separate chunks for Bootstrap
          'bootstrap.min.css': ['bootstrap/dist/css/bootstrap.min.css'],
          'bootstrap.min.js': ['bootstrap/dist/js/bootstrap.js'],
          // Create a separate chunk for Bootstrap Icons
          'bootstrap-icons': ['bootstrap-icons/font/bootstrap-icons.css'],
        },
      },
    },
  },
});
