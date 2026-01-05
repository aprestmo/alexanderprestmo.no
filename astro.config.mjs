import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "no",
    locales: ["no", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallback: {
      en: "no",
    },
  },
  output: "server",
  adapter: netlify(),
});
