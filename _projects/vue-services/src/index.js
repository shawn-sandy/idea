import Vue from "vue";
import DataProvider from "./Index.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#data-service",
  name: "AxiosProvider",
  components: {
    DataProvider
  }
});
