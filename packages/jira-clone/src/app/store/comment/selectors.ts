import { RootState } from '..';
import * as fromInterface from '../../ts';
import { IComment } from '../../ts/models/comment';
import { ICommentState } from './slice';

export const selectSlice = (state: RootState): ICommentState => state.comment;

export const selectItems = (state: RootState): IComment[] =>
  selectSlice(state).items;

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
