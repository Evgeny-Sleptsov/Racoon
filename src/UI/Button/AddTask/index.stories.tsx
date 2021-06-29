import ButtonAddTask, { ButtonAddTaskProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  component: ButtonAddTask,
  title: 'Buttons/AddTask',
  argTypes: {
    color: { type: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonAddTaskProps> = (args) => (
  <ButtonAddTask {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: '#4059da',
};
