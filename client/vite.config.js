import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  deploy: '/jobs-api/',
  plugins: [react()],
})
