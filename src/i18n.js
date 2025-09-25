import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import kh from "./locales/kh.json";

i18n
  .use(LanguageDetector) // detects browser language & supports caching
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kh: { translation: kh }
    },
    fallbackLng: "en",
    debug: false, // set true while debugging
    detection: {
      // order to check for language
      order: ["localStorage", "navigator"],
      // cache user language in localStorage
      caches: ["localStorage"]
    },
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

// keep document language attribute in sync
document.documentElement.lang = i18n.language || "en";
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
