import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon(), astroI18next()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {prefixDefaultLocale: false},
    fallback: { en: 'es' },
  },
});