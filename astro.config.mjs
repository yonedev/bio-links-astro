import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.VITE_URL,
  compressHTML: true,
  vite: {
    plugins: [yaml()]
  },
  integrations: [tailwind({
    applyBaseStyles: false // a True carga los archivos base de tailwind sin tener que crear un base.css e importarlo en el layout
  }), sitemap({
    filter: (page) => {
      // Omitir manifes.json y splash del sitemap
      //console.log('hola' + page)
      return page !== `${import.meta.env.VITE_URL}/manifest.json/` &&
      page !== `${import.meta.env.VITE_URL}/splash/`
    }
  })]
});