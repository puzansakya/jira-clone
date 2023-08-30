import { RootState } from '..';
import * as fromInterface from '../../ts';
import { IIssueTypeState } from './slice';

export const selectSlice = (state: RootState): IIssueTypeState =>
  state.issueType;

export const selectItems = (state: RootState): any[] =>
  selectSlice(state).items;

export const selectDropdownItems = (state: RootState) =>
  selectSlice(state).items.map((item) => ({
    label: `${item.name}`,
    value: item.id,
    src: item.avatar,
  }));

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
