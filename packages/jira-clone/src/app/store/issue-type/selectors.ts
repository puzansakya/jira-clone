import { RootState } from '..';
import * as fromInterface from '../../ts';
import { IDropdownCollection, IIssueTypeCollection } from '../../ts';
import { IIssueTypeState } from './slice';

export const selectSlice = (state: RootState): IIssueTypeState =>
  state.issueType;

export const selectItems = (state: RootState): IIssueTypeCollection =>
  selectSlice(state).items;

export const selectDropdownItems = (state: RootState): IDropdownCollection =>
  selectSlice(state).items.map((item) => ({
    label: `${item.name}`,
    value: item.id,
  }));

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
