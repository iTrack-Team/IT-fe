import {
  ActionReducerMap, createSelector, createFeatureSelector,
  ActionReducer, MetaReducer
} from '@ngrx/store';
import * as fromUser from './user';
export interface State {
  user: fromUser.State;
}
export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};
export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];

export const getUserState = createFeatureSelector<fromUser.State>('user');

export const getUser = createSelector(
  getUserState,
  fromUser.getUser,
);

