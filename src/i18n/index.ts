import { createI18n } from "vue-i18n";
import en from "@/i18n/en";
import ko from "@/i18n/ko";

export default createI18n<[typeof en], "en" | "ko">({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    ko: ko,
  },
});
