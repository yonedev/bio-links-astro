import content from '@content'
import favIcon36x36 from '@favicons/icon-36x36.png'
import favIcon48x48 from '@favicons/icon-48x48.png'
import favIcon72x72 from '@favicons/icon-72x72.png'
import favIcon96x96 from '@favicons/icon-96x96.png'
import favIcon144x144 from '@favicons/icon-144x144.png'
import favIcon192x192 from '@favicons/icon-192x192.png'

export const get = () => {
  const json = JSON.stringify({
    name: content.site.name,
    short_name: content.site.shortName,
    start_url: '/',
    display: 'standalone',
    background_color: content.metadata.tileColor,
    theme_color: content.metadata.themeColor,
    description: content.metadata.description,
    icons: [
      {
        src: favIcon36x36,
        sizes: '36x36',
        type: 'image/png',
        density: '0.75'
      },
      {
        src: favIcon48x48,
        sizes: '48x48',
        type: 'image/png',
        density: '1.0'
      },
      {
        src: favIcon72x72,
        sizes: '72x72',
        type: 'image/png',
        density: '1.5'
      },
      {
        src: favIcon96x96,
        sizes: '96x96',
        type: 'image/png',
        density: '2.0'
      },
      {
        src: favIcon144x144,
        sizes: '144x144',
        type: 'image/png',
        density: '3.0'
      },
      {
        src: favIcon192x192,
        sizes: '192x192',
        type: 'image/png',
        density: '4.0'
      }
    ],
    splash_pages: '/splash'
  })
  return {
    body: json
  }
}
