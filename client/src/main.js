import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(require("vue-moment"));

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
