import LoginInput from '../../../components/molecules/LoginInput.vue';

export default {
  title: 'Molecules/LoginInput',
  component: LoginInput,
};

const Template = (args) => ({
  components: { LoginInput },
  setup() {
    return { args };
  },
  template: '<LoginInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Email Address',
};