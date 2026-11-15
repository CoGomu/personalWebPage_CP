import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/services', component: ServicesView },
    { path: '/contact', component: ContactView },
  ],
})

router.afterEach((_to, _from, next) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const scrollContainer = document.querySelector('.scroll-container')
      if (scrollContainer) {
        scrollContainer.scrollTop = 0
      }
    })
  })
  // next()
})

export default router
