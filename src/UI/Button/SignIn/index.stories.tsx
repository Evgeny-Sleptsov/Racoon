import ButtonSignIn, { ButtonSignInProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  component: ButtonSignIn,
  title: 'Buttons/SignIn',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonSignInProps> = (args) => <ButtonSignIn {...args} />;

export const Default = Template.bind({});
