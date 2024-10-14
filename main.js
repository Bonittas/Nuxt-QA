// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import router from './router/index.js'; // Import the router from the index file

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Register the router
app.mount('#app'); // Mount the app to the DOM

