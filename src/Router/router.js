import { createWebHistory, createRouter } from "vue-router";

import Newsletter from "../components/newsletter.vue";
import Success from "../components/success.vue";

const routes = [
  { path: "/", component: Newsletter },
  { path: "/success/:email", name: "success", component: Success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
