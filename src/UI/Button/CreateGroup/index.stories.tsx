import ButtonAddGroup, { ButtonCreateProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  component: ButtonAddGroup,
  title: 'Buttons/AddGroup',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonCreateProps> = (args) => (
  <ButtonAddGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Add Group',
};
