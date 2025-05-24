import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/admin.vue'
import main from '../mainStore/main.vue'
import popular from '../mainStore/popular.vue'
import categori from '../components/categori-component/main.vue'

const routes = [
  { path: '/admin', component: admin },
  { path: '/popular', component: popular },
 { path: '/categori/:id', component: categori }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router