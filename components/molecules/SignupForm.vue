<template>
  <form @submit.prevent="handleSignup">
    <InputField
      label="Name"
      id="name"
      v-model="name"
      :errorMessage="nameError"
    />
    <InputField
      label="Surname"
      id="surname"
      v-model="surname"
      :errorMessage="surnameError"
    />
    <InputField
      label="Email Address"
      id="email"
      type="email"
      v-model="email"
      :errorMessage="emailError"
    />
    <InputField
      label="Password"
      id="password"
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      :errorMessage="passwordError"
    />
    <Button @click="toggleShowPassword">
      <Icon :iconClass="showPassword ? 'fa-eye-slash' : 'fa-eye'" />
    </Button>
    <InputField
      label="Confirm Password"
      id="confirmPassword"
      :type="showPassword ? 'text' : 'password'"
      v-model="confirmPassword"
      :errorMessage="confirmPasswordError"
    />
    <div class="term">
      <input type="checkbox" v-model="termsAccepted" />
      <span>I accept Terms & Conditions and Privacy Policy</span>
    </div>
    <Button :disabled="!formIsValid" type="submit">
      <span v-if="isSubmitting">Registering...</span>
      <span v-else>Enter</span>
    </Button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </form>
</template>

<script>
import { ref, computed } from 'vue';
import InputField from '/components/atoms/InputField.vue';
import Button from '/components/atoms/Button.vue';
import Icon from '/components/atoms/Icon.vue';
import { useUserStore } from '@/store/UserStore';
import { useRouter } from 'vue-router';

export default {
  components: { InputField, Button, Icon },
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const name = ref('');
    const surname = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const termsAccepted = ref(false);
    const isSubmitting = ref(false);
    const showPassword = ref(false);
    const errorMessage = ref('');
    const successMessage = ref('');

    const formIsValid = computed(() => {
      return termsAccepted.value && name.value && surname.value && email.value && password.value === confirmPassword.value;
    });

    const handleSignup = async () => {
      isSubmitting.value = true;
      // Implement your signup logic here
      isSubmitting.value = false;
    };

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      name,
      surname,
      email,
      password,
      confirmPassword,
      termsAccepted,
      isSubmitting,
      showPassword,
      errorMessage,
      successMessage,
      formIsValid,
      handleSignup,
      toggleShowPassword,
    };
  },
};
</script>
