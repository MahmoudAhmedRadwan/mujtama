import VueI18n from "vue-i18n";
import enLocale from './lang/en';
import arLocale from './lang/ar';
import Vue from 'vue'

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  ar: {
    ...arLocale,
  },
};

export default new VueI18n({
    locale: 'ar',
    fallbackLocale: 'ar',
    messages,
    silentTranslationWarn: process.env.NODE_ENV === 'production',
  }); 
   