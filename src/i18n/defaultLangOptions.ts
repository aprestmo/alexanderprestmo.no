export const Languages = [
  {
    name: 'Norsk Bokmål',
    value: 'no',
  },
  {
    name: 'English',
    value: 'en',
  },
] as const;

export const defaultLanguage = 'no';

export type Lang = (typeof Languages)[number]['value'];
