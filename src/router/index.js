import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SettingView from "@/views/SettingView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      beforeEnter(to, from) {
        return { name: "login" };
      },
    },
    {
      path: "/setting",
      name: "setting",
      component: SettingView,
    },
    {
      path: "/dashboard",
      name: "dasboard",
      component: DashboardView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
