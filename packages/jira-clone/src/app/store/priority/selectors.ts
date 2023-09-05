import { RootState } from '..';
import * as fromInterface from '../../ts';
import { IDropdownCollection } from '../../ts';
import { PriorityState } from './slice';

export const selectSlice = (state: RootState): PriorityState => state.priority;
export const selectItems = (
  state: RootState
): fromInterface.IProjectCollection => selectSlice(state).items;

export const selectDropdownItems = (state: RootState): IDropdownCollection => {
  return selectSlice(state).items.map((priority) => {
    return {
      label: priority.name,
      value: priority.id,
      icon: priority.icon,
    };
  });
};

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
