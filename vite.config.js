import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/EcoLoopAI/',
  plugins: [react()],
  server: {
    port: 3000
  }
});
