import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Orders from "../views/Orders.vue";
import OrderDetails from "../views/OrderDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter: (to, from, next) => {
      const isAuthenticated = true;

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
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/orders/:id", // Dynamic parameter for order ID
    name: "OrderDetails",
    component: OrderDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
