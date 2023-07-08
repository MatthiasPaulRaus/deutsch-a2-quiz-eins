import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deutsch-a2-quiz-eins/',
  plugins: [react()],
})
