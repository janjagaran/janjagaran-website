// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react-icons'],       // ✅ prebundle react-icons
    esbuildOptions: {
      ignoreAnnotations: true,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],                 // ✅ ensure nothing externalized
    },
  },
})
