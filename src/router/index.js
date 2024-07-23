import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import ProductosView from '@/views/ProductosView.vue'
import DetalleProductosView from '@/views/DetalleProductosView.vue'
import AdminView from '@/views/AdminView.vue'
import EditProductView from '@/views/EditProductView.vue'
const LoginView = () => import('../views/LoginView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/product/:id',
    name: 'Producto',
    component: DetalleProductosView
  },
  {
    path: '/products',
    name: 'Productos',
    component: ProductosView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    meta: {
      requiresAuth: true,
      requireAdmin: true
    }
  },
  {
    path: '/admin/products/:id',
    name: 'edit',
    component: EditProductView,
    meta: {
      requiresAuth: true,
      requireAdmin: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated']
  const isAdmin = store.getters['auth/isAdmin']

  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else if(to.matched.some(record => record.meta.requireAdmin) && !isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
