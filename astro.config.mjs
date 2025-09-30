// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://pushlimits.github.io",
  base: "/homebase",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@icons": "/src/components/icons",
        "@images": "/src/images",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@styles": "/src/styles"
      }
    }
  }
})
