interface OpenGraph {
  type: string
  locale: string
  image: string
}

interface Twitter {
  cardType: string
  site: string
  image: string
}

export interface Metadata {
  title: string
  description: string
  tileColor: string
  themeColor: string
  openGraph: OpenGraph
  twitter: Twitter
}
