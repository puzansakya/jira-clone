import { RootState } from '..';
import * as fromInterface from '../../ts';
import { StatusState } from './slice';

export const selectSlice = (state: RootState): StatusState => state.status;

export const selectItems = (
  state: RootState
): fromInterface.IStatusCollection => selectSlice(state).items;

export const selectDropdownItems = (
  state: RootState
): fromInterface.IDropdown[] => {
  return (
    selectSlice(state).items.map((status) => {
      return {
        label: status.name,
        value: status.id,
        bg: status.bg,
        color: status.color,
      };
    }) || []
  );
};

export const selectStatus = (
  state: RootState
): fromInterface.State.IDLE | fromInterface.State.LOADING =>
  selectSlice(state).status;

export const selectLoaded = (state: RootState): boolean =>
  selectSlice(state).loaded;
