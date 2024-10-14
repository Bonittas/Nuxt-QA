<template>
  <div class="login-template">
    <header class="header">
      <h1>Welcome Back!</h1>
    </header>

    <main class="main-content">
      <LoginCard />
    </main>

    <footer class="footer">
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import LoginCard from '@/components/organisms/LoginCard.vue';

export default {
  name: 'LoginTemplate',
  components: {
    LoginCard,
  },
};
<style scoped src="../styles/login.css"></style>