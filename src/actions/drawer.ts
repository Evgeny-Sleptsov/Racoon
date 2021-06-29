import { DrawerActions } from '../constants/actionTypes';
import { ITodoFromDataBase } from '../helpers/interfaces';


interface IDrawerAction {
  id?: string,
  isOpen?: boolean,
  title?: string,
  icon?: string,
  themeColor?: string
  todos?: ITodoFromDataBase[]
}

export const setDrawerContent = (data: IDrawerAction) => ({
  type: DrawerActions.SET_DRAWER_CONTENT,
  payload: data,
});

export const discardDrawerContent = () => ({
  type: DrawerActions.DISCARD_DRAWER_CONTENT
});

export const toggleDrawer = (data: boolean) => ({
  type: DrawerActions.TOGGLE_DRAWER,
  payload: data,
});

interface SetDrawerContent {
  type: DrawerActions.SET_DRAWER_CONTENT,
  payload: IDrawerAction
}

interface DiscardDrawerContent {
  type: DrawerActions.DISCARD_DRAWER_CONTENT,
}
interface ToggleDrawer {
  type: DrawerActions.TOGGLE_DRAWER,
  payload: boolean
}

export type Action = SetDrawerContent | ToggleDrawer | DiscardDrawerContent;