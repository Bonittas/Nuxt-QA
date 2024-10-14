import SocialButton from '../../../components/molecules/SocialButton.vue';

export default {
  title: 'Molecules/SocialButton',
  component: SocialButton,
};

const Template = (args) => ({
  components: { SocialButton },
  setup() {
    return { args };
  },
  template: '<SocialButton v-bind="args" />',
});

export const Google = Template.bind({});
Google.args = {
  platform: 'google',
  iconSrc: 'data:image/svg+xml,%3csvg...%3e', 
  label: 'Continue with Google',
};

export const Facebook = Template.bind({});
Facebook.args = {
  platform: 'facebook',
  iconSrc: 'data:image/svg+xml,%3csvg...%3e', 
  label: 'Continue with Facebook',
};

export const Apple = Template.bind({});
Apple.args = {
  platform: 'apple',
  iconSrc: 'data:image/svg+xml,%3csvg...%3e',
  label: 'Continue with Apple',
};