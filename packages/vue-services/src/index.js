import Vue from "vue";
import DataProvider from "./Index.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  name: "AxiosProvider",
  components: {
    DataProvider
  }
});
