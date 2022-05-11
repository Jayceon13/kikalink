
const routes = [
  {
    path: '/',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/photo', component: () => import('pages/PhotoPage.vue') },
      { path: '/video', component: () => import('pages/VideoPage.vue') },
      { path: '/record', component: () => import('pages/RecordPage.vue') },
      { path: '/services', component: () => import('pages/ServicesPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
