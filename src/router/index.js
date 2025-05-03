import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/admin.vue'


const routes = [
  { path: '/admin', component: admin }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router