const routes = [
  {
    path: "",
    component: () => import("layouts/MenuLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/services", component: () => import("pages/ServicesPage.vue") },
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
  {
    path: "/eng",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/eng", component: () => import("pages/IndexPageEng.vue")
      },]
  }
];

export default routes;
