import { GroupsActions } from '../constants/actionTypes';
import { Action } from '../actions/groups';

export default function groupsReducer(state = [], action: Action) {
  switch (action.type) {
    case GroupsActions.UPDATE_GROUPS:
      return action.payload;
    default:
      return state;
  }
}
