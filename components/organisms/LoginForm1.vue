<template>
  <div>
    <Input type="email" placeholder="Email Address" v-model="email" :error="errorMessage" />
    <Button label="Enter" buttonClass="enter-button" @click="handleEnter" />
    <SocialButtons :buttons="socialButtons" />
  </div>
</template>

<script>
import Input from '/components/atoms/InputField.vue';
import Button from '/components/atoms/Button.vue';
import SocialButtons from '/components/molecules/SocialButton.vue';
import { useUserStore } from '/store/UserStore';
import { useRouter } from 'vue-router';

export default {
  components: { Input, Button, SocialButtons },
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const email = ref(userStore.email);
    const errorMessage = ref(userStore.errorMessage);

    const handleEnter = () => {
      userStore.handleEnter(router);
    };

    const socialButtons = [
      { label: 'Continue with Google', class: 'social-button google', action: () => {} },
      { label: 'Continue with Facebook', class: 'social-button facebook', action: () => {} },
      { label: 'Continue with Apple', class: 'social-button apple', action: () => {} },
    ];

    return {
      email,
      errorMessage,
      handleEnter,
      socialButtons,
    };
  },
};
</script>

<style scoped src="../../styles/login.css"></style>
