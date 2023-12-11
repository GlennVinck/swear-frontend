import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
      const isAuthenticated = false;

      if (!isAuthenticated) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
