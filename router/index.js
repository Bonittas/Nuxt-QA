// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '/components/LoginForm1.vue'; // Your login component
import Signup from '/pages/Signup.vue'; // Your signup component

const routes = [
  {
    path: '/',
    name: 'LoginForm1',
    component: LoginForm, // Renders the login form at the root path
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup, // Renders the signup form at /signup
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
