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
        home: "主页",
        gallery: "作品集",
        photos: "照片集",
        video: "视频集锦",
        contact: "联系方式",
      },
      hero: {
        role: "演员 • 模特",
      },
      sections: {
        photos: "照片集",
        videos: "视频集锦",
        contact: "联系方式",
      },
      video: {
        showreel: "作品集",
      },
      contact: {
        name: "姓名：",
        email: "邮箱：",
        message: "留言：",
        send: "发送",
        skills: "技能",
      },
      common: {
        comingSoon: "即将推出",
      },
      footer: {
        madeBy: "Made By：",
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
