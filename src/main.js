import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";

import router from "./router";
import FontAwesomePlugin from "./config/fontawesome.config";

const app = createApp(App);

FontAwesomePlugin(app);

app.use(router);
app.mount("#app");
