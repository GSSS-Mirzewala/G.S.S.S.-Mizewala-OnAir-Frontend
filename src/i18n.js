import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // load translations from /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // connect with React
  .init({
    fallbackLng: "en", // default language
    debug: false,

    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export default i18n;
