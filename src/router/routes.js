
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Main.vue') },
      { path: '/cart', component: () => import('pages/CartPage.vue') },
      { path: '/catalog', component: () => import('pages/CatalogPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/delivery', component: () => import('pages/DeliveryPage.vue') },
      { path: '/favorites', component: () => import('pages/FavoritesPage.vue') },
      { path: '/contacts', component: () => import('pages/ContactsPage.vue') },
      { path: '/product', component: () => import('pages/ProductPage.vue') },
      { path: '/cabinet', component: () => import('src/pages/CabinetPage.vue') },
      { path: '/register', component: () => import('src/pages/RegisterPage.vue') },
      { path: '/info', component: () => import('src/pages/InfoPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
