import {
  DrawerActions
} from '../constants/actionTypes';
import { COLORS } from '../constants/colorsPalette';
import { IDrawer } from '../helpers/interfaces'
import { DEFAUL_ICON } from '../constants/icons';
import { Action } from '../actions/drawer';

const initialState = {
  id: '',
  isOpen: false,
  title: 'Untitle',
  icon: DEFAUL_ICON,
  themeColor: COLORS[0],
  todos: [],
};

export default function drawerReducer(state: IDrawer = initialState, action: Action) {
  switch (action.type) {
    case DrawerActions.DISCARD_DRAWER_CONTENT:
      return initialState;
    case DrawerActions.SET_DRAWER_CONTENT:
      return { ...state, ...action.payload };
    case DrawerActions.TOGGLE_DRAWER:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
}

