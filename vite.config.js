import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
    ReactRefresh(),],
})
