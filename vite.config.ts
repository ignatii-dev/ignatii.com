import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../dist",
  },
  clearScreen: false,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  root: path.resolve(__dirname, "./src"),
})
