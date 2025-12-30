import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        gallery: "Gallery",
        photos: "Photos",
        video: "Video",
        contact: "Contact Me",
      },
      hero: {
        role: "Actress • Model",
      },
      sections: {
        photos: "Photo Gallery",
        videos: "Video Gallery",
        contact: "Contact Me",
      },
      video: {
        showreel: "Showreel",
      },
      contact: {
        name: "Name:",
        email: "Email:",
        message: "Message:",
        send: "Send",
        skills: "Skills",
      },
      common: {
        comingSoon: "Coming Soon",
      },
      footer: {
        madeBy: "Made by",
      },
    },
  },

  yue: {
    translation: {
      nav: {
        home: "主頁",
        gallery: "作品",
        photos: "相片",
        video: "影片",
        contact: "聯絡我",
      },
      hero: {
        role: "演員 • 模特兒",
      },
      sections: {
        photos: "相片作品",
        videos: "影片作品",
        contact: "聯絡我",
      },
      video: {
        showreel: "作品集",
      },
      contact: {
        name: "姓名：",
        email: "電郵：",
        message: "留言：",
        send: "送出",
        skills: "技能",
      },
      common: {
        comingSoon: "即將推出",
      },
      footer: {
        madeBy: "網站製作：",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnNull: false,
  returnEmptyString: false,
});

export default i18n;
