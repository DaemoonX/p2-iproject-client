import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from '../views/LoginView.vue';
import PatientView from '../views/PatientView.vue';
import ListDoctorView from '../views/ListDoctorView.vue'
import Appointment from '../views/Appointment.vue'
import Payment from '../views/Payment.vue';
import StatusAppointment from '../views/StatusAppointment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/patient",
      name: "patient",
      component: PatientView,
    },
    {
      path: "/doctor",
      name: "doctor",
      component: ListDoctorView,
    },
    {
      path: "/appointment",
      name: "appointment",
      component: Appointment,
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/status",
      name: "status",
      component: StatusAppointment,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name === 'favorite') {
    return { name: 'login' }
  } else if( (localStorage.access_token && to.name === 'login') || (localStorage.access_token && to.name === 'register') ) {
    return { name: 'home' }
  }
})

export default router;
