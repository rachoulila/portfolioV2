import { defineConfig } from "astro/config";

// Le nom de repo GitHub Pages n'est pas encore fixé : on lit une variable
// d'env au build (voir .github/workflows/deploy.yml) et on retombe sur "/"
// en local. Rien d'autre à changer le jour où le repo est renommé.
const base = process.env.SITE_BASE || "/";
const site = process.env.SITE_URL || "https://rachoulila.github.io";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
