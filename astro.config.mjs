// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.manuola.com",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@icons": "/src/components/icons",
        "@assets": "/src/assets",
        "@data": "/src/data",
        "@layouts": "/src/layouts",
        "@lib": "/src/lib",
        "@pages": "/src/pages",
        "@styles": "/src/styles"
      }
    }
  }
});
