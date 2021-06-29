import { UserActions } from '../constants/actionTypes';
import { IUser } from '../helpers/interfaces';

export const setUser = (data: IUser) => ({
  type: UserActions.SET_USER,
  payload: data,
});

export const signInUser = () => ({
  type: UserActions.SIGN_IN,
});

interface SetUser {
  type: UserActions.SET_USER,
  payload: IUser,
}

interface SignInUser {
  type: UserActions.SIGN_IN,
}

export type Action = SetUser | SignInUser;