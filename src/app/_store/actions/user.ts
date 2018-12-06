import { Action } from '@ngrx/store';
import { User } from '../../registration-page/user.type';
export const SELECT = 'SELECT';
export const SET = 'SET';
export class Select implements Action {
  readonly type = SELECT;
}
export class Set implements Action {
  readonly type = SET;
  constructor(public payload: User) { }
}
export type Action = Select | Set;
