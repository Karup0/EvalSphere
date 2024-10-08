import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(), wasm(), topLevelAwait()],
  optimizeDeps: {
    exclude: ['firebase-admin']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
})
