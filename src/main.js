import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SvgIcon from "@/components/SvgIcon.vue";
import SvgSprite from "@/components/SvgSprite.vue";

import VueMasonry from "vue-masonry-css";

createApp(App)
  .use(store)
  .use(router)
  .component("svg-sprite", SvgSprite)
  .component("svg-icon", SvgIcon)
  .use(VueMasonry)
  .mount("#app");
