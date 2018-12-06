import { Action, createSelector } from '@ngrx/store';
import { User } from '../../registration-page/user.type';
import * as userAction from '../actions/user';
export interface State {
  user: User,
}
export const initialState: State = {
  user: {
    id: '',
    name: '',
    surname: '',
    email: '',
  },
};

export const getUser = createSelector(((state:State) => state.user));//(state: State) => state.user;

export function reducer(state = initialState,
  action: userAction.Action){
    switch (action.type) {
      case userAction.SELECT: {
        return { ...state.user };
      };
      case userAction.SET: {
        const user: User = action.payload;
        return { user };
      };
      default:
        return state;
    }
}
