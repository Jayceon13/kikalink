const routes = [
  {
    path: "/ru",
    component: () => import("layouts/MenuLayout.vue"),
    children: [
      { path: "/ru", component: () => import("pages/IndexPage.vue") },
      { path: "/services", component: () => import("pages/ServicesPage.vue") },
      { path: "/about", component: () => import("pages/AboutPage.vue") },
      {
        path: "/lashesbrow",
        component: () => import("src/pages/LashesBrowPage.vue"),
      },
      {
        path: "/makeup",
        component: () => import("src/pages/MakeupPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
