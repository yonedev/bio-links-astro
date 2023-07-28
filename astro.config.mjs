import { defineConfig } from 'astro/config'
import yaml from '@rollup/plugin-yaml'
import tailwind from '@astrojs/tailwind'

// import conf from './src/config.yml'

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000', //  conf.site.url, // TODO: tomar de alguna variable
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
