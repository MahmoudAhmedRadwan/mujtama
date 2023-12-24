/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.scss";
import VueApexCharts from 'vue-apexcharts'
import VueHtmlToPaper from 'vue-html-to-paper';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import i18n from './i18n';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if(!language) {
    language = localStorage.getItem('lang')
  }

  i18n.locale = language
  next()
})



const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options, i18n);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
