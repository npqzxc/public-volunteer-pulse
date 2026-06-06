import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import RecordsPage from "./pages/RecordsPage.vue";
import DetailPage from "./pages/DetailPage.vue";
import CreatePage from "./pages/CreatePage.vue";
import "./styles/base.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DashboardPage },
    { path: "/records", component: RecordsPage },
    { path: "/records/:id", component: DetailPage, props: true },
    { path: "/create", component: CreatePage }
  ]
});

createApp(App).use(router).mount("#app");
