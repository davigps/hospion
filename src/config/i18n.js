import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import ptTranslation from '../locales/pt/translations.json';
import enTranslation from '../locales/en/translations.json';
import esTranslation from '../locales/es/translations.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    lng: 'pt',
    fallbackLng: 'pt',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translations: ptTranslation,
      },
      en: {
        translations: enTranslation,
      },
      es: {
        translations: esTranslation,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
