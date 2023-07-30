/**
 * Metadata
 */
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

/**
 * FooterData
 */
export interface FooterData {
  creditLink?: string
  creditText?: string
}

/**
 * SocialLink
 */
export interface SocialLinkType {
  title: string
  url: string
  iconHoverColor: string
  iconHoverColorDark: string
  iconPack: string
  iconName: string
}

/**
 * Link
 */
export interface LinkType {
  title: string
  url: string
  iconPack: string
  iconName: string
  textColor?: string
  textColorHover?: string
  textColorHoverDark?: string
  isFirstElement?: boolean
  isLastElement?: boolean
  download?: string
}
