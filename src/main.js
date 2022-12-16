import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

const BaseButton = defineAsyncComponent(() =>
  import("./components/atoms/BaseButton.vue")
);

const Icon = defineAsyncComponent(() =>
  import("@/components/atoms/TheIcon.vue")
);

app.component("base-button", BaseButton);
app.component("the-icon", Icon);

app.mount("#app");
