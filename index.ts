import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClockView from '../views/ClockView.vue'
import CalenderView from '../views/CalenderView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clock',
      name: 'clock',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ClockView
    },
    {
      path: '/calender',
      name: 'calender',
      component: CalenderView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    }
  ]
})

export default router
