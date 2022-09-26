

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", name: "root", component: () => import("pages/Index.vue") },
      { path: "/base", name: "measure", component: () => import("components/BaseMeasure.vue") },//src/pages/BaseMeasure.vue
      { path: "/about", name: "about", component: () => import("pages/About.vue") },
      { path: "/player", name: "player", component: () => import("pages/WorkoutPlayer.vue") },
      { path: "/builder", name: "builder", component: () => import("pages/WorkoutBuilder.vue") },
      { path: "/planner", name: "planner", component: () => import("pages/MealPlanner.vue") },
      { path: "/home", name: "home", component: () => import("pages/HomeBase.vue") },
      { path: "/prescription", name: "prescription", component: () => import("pages/Prescription.vue") },
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
