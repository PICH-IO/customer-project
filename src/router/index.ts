import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path:'/',
    name:'Mainlayout',
    component:()=>import('@/pages/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;