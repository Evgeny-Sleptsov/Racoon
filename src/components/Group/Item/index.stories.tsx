import GroupItem, { GroupItemProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  component: GroupItem,
  title: 'Todo/Group',
  argTypes: {
    icon: {
      options: ['default', 'airplane', 'money', 'color', 'camera'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<GroupItemProps> = (args) => <GroupItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'default',
  title: 'Home',
  todos: [
    {
      title: 'task 1',
      completed: false,
    },
    {
      title: 'task 2',
      completed: true,
    },
  ],
};
