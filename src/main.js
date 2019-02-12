// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import http from "./util/http";


window.http = http;

window.$ = window.jQuery = require("jquery");
require("bootstrap");
require("../node_modules/mdbootstrap/js/mdb");
require("../node_modules/jquery.easing/jquery.easing");
require("../node_modules/magnific-popup/dist/jquery.magnific-popup");

// Validação de formulários
const SimpleVueValidation = require("simple-vue-validator");
window.Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
