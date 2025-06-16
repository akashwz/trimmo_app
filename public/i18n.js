import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Dynamically load all translations from `./locales/<lang>/<files>.json`
const loadAllTranslations = () => {
  const context = require.context("./locales", true, /\.json$/);
  const resources = {};

  context.keys().forEach((key) => {
    const match = key.match(/\.\/(\w+)\/(.+)\.json$/); // Extract lang and file name
    if (!match) return;

    const lang = match[1];
    const content = context(key);

    if (!resources[lang]) {
      resources[lang] = { translation: {} };
    }

    resources[lang].translation = {
      ...resources[lang].translation,
      ...content,
    };
  });

  return resources;
};

const resources = loadAllTranslations();

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
