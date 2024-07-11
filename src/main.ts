import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import i18n from "@/i18n";

createApp(App)
  .use(store)
  .use(router)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(i18n)
  .mount("#app");
