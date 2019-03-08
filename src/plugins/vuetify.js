import Vue from "vue";
import Vuetify, { VApp } from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp
  },
  options: {
    customProperties: true
  },
  iconfont: "fa"
});
