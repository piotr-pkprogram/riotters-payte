import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

const BaseButton = defineAsyncComponent(() =>
  import("@/components/atoms/BaseButton.vue")
);

const Icon = defineAsyncComponent(() =>
  import("@/components/atoms/TheIcon.vue")
);

const InvestBlock = defineAsyncComponent(() =>
  import("@/components/templates/InvestBlock.vue")
);

const TabsWrapper = defineAsyncComponent(() =>
  import("@/components/templates/TabsWrapper.vue")
);

const TabsOption = defineAsyncComponent(() =>
  import("@/components/atoms/TabsOption.vue")
);

app.component("base-button", BaseButton);
app.component("the-icon", Icon);
app.component("invest-block", InvestBlock);
app.component("tabs-wrapper", TabsWrapper);
app.component("tabs-option", TabsOption);

app.mount("#app");
