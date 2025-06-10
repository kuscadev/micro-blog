import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kusca.dev",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  redirects:{
    "/blog/01-ag-topolojisi/ag-topolojisi-nedir": {
      status: 301,
      destination: "/blog/ag-topolojisi"
    },
    "/blog/03-bash-script-ders-notlari/bash-script-ders-notlarim": {
      status: 301,
      destination: "/blog/bash-script-ders-notlari"
    }
  }
});
