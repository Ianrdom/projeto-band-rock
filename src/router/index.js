import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/daily_rock",
      name: "daily_rock",
      component: () => import("../views/DailyRockView.vue"),
    },
    {
      path: "/resultado/:search",
      name: "resultado",
      component: () => import("../views/ResultadoView.vue"),
      props: true,
    },
    {
      path: "/artistas",
      name: "artistas",
      component: () => import("../views/ArtistasView.vue"),
    },
    {
      path: "/artistas/:id",
      name: "artistasDetail",
      component: () => import("../views/ArtistasDetailView.vue"),
      props: true,
    },
  ],
});

export default router;
