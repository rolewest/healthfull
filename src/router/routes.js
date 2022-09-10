

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/base", component: () => import("components/BaseMeasure.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/player", component: () => import("pages/WorkoutPlayer.vue") },
      { path: "/builder", component: () => import("pages/WorkoutBuilder.vue") },
    ],

  },
  {
    path: "/about",
    name: "about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/about", component: () => import("pages/About.vue") }],
  },

  // {
  //   path: "/base",
  //   name: "base",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "/base", component: () => import("components/BaseMeasure.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
