import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import lngEnglish  from "./lng/lngEnglish.json";
import lngSpanish  from "./lng/lngSpanish.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: lngEnglish,
    },

    es: {
      translation: lngSpanish,
    },
  },

  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
