export const Languages = [
  {
    name: 'Norsk Bokmål',
    value: 'nb-NO',
  },
  {
    name: 'English',
    value: 'en',
  },
] as const

export const defaultLanguage = 'nb-NO'

export type Lang = (typeof Languages)[number]['value']
