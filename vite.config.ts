import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages部署配置
  base: mode === 'production' ? '/digitallab-static-site/' : '/',
  plugins: [
    react(),
    tsconfigPaths(),
  ],

}))
