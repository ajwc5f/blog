import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mixins from "./mixins";
Vue.mixin(mixins);

import axios from "axios";
Vue.prototype.$http = axios;

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      disable: "phone",
      delay: 50,
      easing: "ease-in-sine"
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
