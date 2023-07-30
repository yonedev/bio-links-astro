import conf from '@config'

export const languages = {
  en: 'English',
  es: 'Español'
}

export const defaultLang = conf.site.defaultLang

export const ui = {
  en: {
    hello_world: 'Hello world'
  },
  es: {
    hello_world: 'Hola mundo'
  }
} as const
