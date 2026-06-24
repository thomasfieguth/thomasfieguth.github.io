import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to '/' for thomasfieguth.github.io (apex domain repo)
  // If deploying to a sub-path like username.github.io/repo, set to '/repo/'
  base: '/',
})
