import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

  if (command === 'serve') {
    return {

      plugins: [react()],
      test: {
        globals: true,
        environment: "jsdom",
      },
    }

  } else {
    //  command = build
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: "jsdom",
      },

    }
  }

})


// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//   },
// })
