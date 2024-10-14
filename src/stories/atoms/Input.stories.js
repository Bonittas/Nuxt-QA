import Input from '../../../components/atoms/InputField.vue';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

// Default Input
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  value: '',
};

// Disabled Input
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input...',
  value: '',
  disabled: true,
};