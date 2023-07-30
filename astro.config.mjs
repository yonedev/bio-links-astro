import { defineConfig } from 'astro/config'
import yaml from '@rollup/plugin-yaml'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.VITE_URL,
  compressHTML: true,
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    tailwind({
      applyBaseStyles: true
    })
  ]
})
