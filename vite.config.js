// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import million from "million/compiler";

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   optimizeDeps: {
//     include: ['react-icons/fa', 'react-icons/fa6'],  // ✅ explicitly include react-icons
//     esbuildOptions: {
//       ignoreAnnotations: true,
//     },
//   },
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       external: [], // ✅ ensure nothing is treated as external
//     },
//     commonjsOptions: {
//       include: [/react-icons/, /node_modules/], // ✅ ensures CommonJS icons load fine
//     },
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import million from "million/compiler";

export default defineConfig({
  plugins: [
    million.vite(),   // ✅ MUST be first for optimization
    react(),
    tailwindcss(),
  ],
  
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/fa6'],  
    esbuildOptions: {
      ignoreAnnotations: true,
    },
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
    },
    commonjsOptions: {
      include: [/react-icons/, /node_modules/],
    },
  },
})
