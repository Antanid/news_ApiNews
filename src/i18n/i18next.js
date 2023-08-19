import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import EngTranslation from './us.json';
import UATranslation from './ua.json';
import PlTranslation from './pl.json';

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['us', 'ua', 'pl'],
    fallbackLng: 'us',
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    resources: {
      us: {
        translation: EngTranslation,
      },
      ua: {
        translation: UATranslation,
      },
      pl: {
        translation: PlTranslation,
      }
    }
  });

export default i18next;