import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'nb-NO',
    locales: ['nb-NO', 'en'],
    // routing: {
    //   prefixDefaultLocale: true,
    // }
  }
});
