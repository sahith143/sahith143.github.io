import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/',
>>>>>>> c662029b784116e7a4a224ef2d154836e32da4f0
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
