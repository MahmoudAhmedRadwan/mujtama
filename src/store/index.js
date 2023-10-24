import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    // domain : "https://printstation.sa/",    
    domain : process.env.VUE_APP_APP_DOMAIN || "https://printstation.sa/",
    localization: "ar",
    showMenu: false,
    userInfo: JSON.parse(localStorage.getItem("printStation_user")) || null,
    moyasarApiPublicKey: 'pk_test_hQFPKX7kVY31Y5TwADQr9UcMoHjoaDHXVZKe9PMa'
  },
  getters: {
    userInfo: state => state.userInfo,
  },
  mutations: {
    MenuToggle(state) {
      state.showMenu = true
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },

});
