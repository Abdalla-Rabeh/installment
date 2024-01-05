import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import showCustomer from '../views/details/show-customer.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path:"/customers/:id",
      name:"showCustomer",
      component:{showCustomer}
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null

  if (isAuthenticated && to.name === 'login') {
    // If already authenticated and trying to access the login page, redirect to home or another authorized route
    next('/')
  } else if (!isAuthenticated && to.name !== 'login') {
    // If not authenticated and trying to access a route other than login, redirect to login
    next('/login')
  } else {
    // Continue with the navigation
    next()
  }
})

export default router
