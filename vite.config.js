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
    react(),        // ✅ Required for React JSX
    tailwindcss(),  // ✅ Tailwind setup
  ],
  optimizeDeps: {
    esbuildOptions: {
      ignoreAnnotations: true, // ✅ ignore "use client" warnings
    },
  },
  build: {
    outDir: 'dist', // ✅ ensure build output folder
  },
})
