import Button from '../../../components/atoms//Button.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Secondary Button',
};