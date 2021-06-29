import {
  ModalsActions,
} from '../constants/actionTypes';

const initialState = {
  createGroup: false,
  createTask: false,
  editGroup: false,
  loader: true,
};

interface ModalsState {
  [key : string]: boolean
}

interface ModalAction {
  type : string,
}


export default function modalsReducer(state: ModalsState = initialState, action: ModalAction) {
  switch (action.type) {
    case ModalsActions.OPEN_CREATE_GROUP_MODAL:
      return { ...state, createGroup: true };
    case ModalsActions.OPEN_EDIT_GROUP_MODAL:
      return { ...state, editGroup: true };
    case ModalsActions.OPEN_CREATE_TASK_MODAL:
      return { ...state, createTask: true };
    case ModalsActions.CLOSE_MODALS:
      return {...initialState, loader: false};
    default:
      return state;
  }
}
