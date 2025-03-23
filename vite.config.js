import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/thuecode24h.github.io/", // Thay bằng tên repo của bạn
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),

    },
  },
})
