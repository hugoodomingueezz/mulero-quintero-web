import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    common: require('../public/locales/es/common.json'),
  },
  en: {
    common: require('../public/locales/en/common.json'),
  },
  pt: {
    common: require('../public/locales/pt/common.json'),
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es',
    fallbackLng: 'es',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
