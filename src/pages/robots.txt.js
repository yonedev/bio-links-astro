import content from '@content'

export const get = () => {
  const urlSitemap = new URL('sitemap-index.xml', import.meta.env.VITE_URL)
  return {
    body: `User-agent: *\nDisallow:\nSitemap: ${urlSitemap}`
  }
}
