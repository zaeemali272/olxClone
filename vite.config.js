export default defineConfig({
  // vite.config.js
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      supported: {
        "top-level-await": true, //browsers can handle top-level-await features
      },
    },
  },
  build: {
    target: "esnext",
  },
});
