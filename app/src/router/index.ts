import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // Hash history for air-gapped / static file deployment
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/facilitator',
      name: 'facilitator',
      component: () => import('../views/FacilitatorView.vue'),
    },
    {
      path: '/assessment/:id',
      name: 'assessment',
      component: () => import('../views/AssessmentView.vue'),
    },
    {
      path: '/results/:id',
      name: 'results',
      component: () => import('../views/ResultsView.vue'),
    },
  ],
})

export default router
