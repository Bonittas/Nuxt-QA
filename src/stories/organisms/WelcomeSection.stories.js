import LoginComponent from '../../../pages/LoginForm1.vue'; 
import { createPinia, setActivePinia } from 'pinia';
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    errorMessage: '',
  }),
  actions: {
    setEmail(value) {
      this.email = value;
    },
    handleEnter() {
      if (!this.email) {
        this.errorMessage = 'Email is required';
      } else {
        this.errorMessage = '';
      }
    },
  },
});

export default {
  title: 'Components/LoginComponent',
  component: LoginComponent,
  argTypes: {
    email: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

const Template = (args) => {
  setActivePinia(createPinia());
  const store = useUserStore();
  store.email = args.email;
  store.errorMessage = args.errorMessage;

  return {
    components: { LoginComponent },
    setup() {
      return { args, store };
    },
    template: '<LoginComponent v-bind="args" />',
  };
};

export const Default = Template.bind({});
Default.args = {
  email: '',
  errorMessage: '',
};

export const WithError = Template.bind({});
WithError.args = {
  email: '',
  errorMessage: 'Email is required',
};

export const WithEmail = Template.bind({});
WithEmail.args = {
  email: 'user@example.com',
  errorMessage: '',
};
