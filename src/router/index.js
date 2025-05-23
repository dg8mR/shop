import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/admin.vue'
import main from '../mainStore/main.vue'

const routes = [
  { path: '/admin', component: admin },
  { path: '/main', component: main }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router