import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(router);
app.use(store);
app.mount("#app");
