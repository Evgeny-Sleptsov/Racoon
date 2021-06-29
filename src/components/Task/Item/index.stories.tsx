import TaskItem, { TaskItemProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  component: TaskItem,
  title: 'Todo/Task',
} as Meta;

const Template: Story<TaskItemProps> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Task',
  completed: false,
};
