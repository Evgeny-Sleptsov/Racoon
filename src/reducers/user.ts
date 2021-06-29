import { UserActions } from '../constants/actionTypes';
import { Action } from '../actions/user';

export default function userReducer(state = {}, action: Action) {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload;
    default:
      return state;
  }
}
