import { RootState } from '..';
import { UserState } from './slice';
import * as fromInterface from '../../ts';

export const selectSlice = (state: RootState): UserState => state.user;

export const selectItems = (state: RootState): fromInterface.IUserCollection =>
  selectSlice(state).items;

export const selectDropdownItems = (
  state: RootState
): fromInterface.IDropdownCollection =>
  selectSlice(state).items.map((item) => ({
    label: `${item.firstName} ${item.lastName}`,
    value: item.id,
    src: item.avatar,
  }));

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
