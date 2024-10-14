import Icon from '../../../components/atoms/Icon.vue';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

// Home Icon
export const Home = Template.bind({});
Home.args = {
  type: 'home',
  size: 'medium',
  color: 'black',
};

// User Icon
export const User = Template.bind({});
User.args = {
  type: 'user',
  size: 'medium',
  color: 'black',
};

// Small Home Icon
export const SmallHome = Template.bind({});
SmallHome.args = {
  type: 'home',
  size: 'small',
  color: 'blue',
};

// Large User Icon
export const LargeUser = Template.bind({});
LargeUser.args = {
  type: 'user',
  size: 'large',
  color: 'red',
};