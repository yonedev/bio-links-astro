import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000', // TODO: tomar de alguna variable
  integrations: [tailwind({
    applyBaseStyles: true
  })]
});