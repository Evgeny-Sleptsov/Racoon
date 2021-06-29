import { combineReducers } from 'redux';
import groups from './groups';
import user from './user';
import modals from './modals';
import drawer from './drawer';

export const rootReducer = combineReducers({
  user,
  drawer,
  groups,
  modals,
});
