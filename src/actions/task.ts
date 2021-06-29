import { TaskAction } from '../constants/actionTypes';

export const triggerTask = (data: HTMLLIElement) => ({
  type: TaskAction.TRIGGER_TASK,
  payload: data
});
interface TriggerTask {
  type: TaskAction.TRIGGER_TASK,
  payload: HTMLLIElement
}

export type TaskActionType = TriggerTask