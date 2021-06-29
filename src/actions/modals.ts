import {
  ModalsActions
} from '../constants/actionTypes';

export const openCreateGroupModal = () => ({
  type: ModalsActions.OPEN_CREATE_GROUP_MODAL,
});

export const openEditGroupModal = () => ({
  type: ModalsActions.OPEN_EDIT_GROUP_MODAL,
});

export const openCreateTaskModal = () => ({
  type: ModalsActions.OPEN_CREATE_TASK_MODAL,
});

export const closeModals = () => ({
  type: ModalsActions.CLOSE_MODALS,
});
