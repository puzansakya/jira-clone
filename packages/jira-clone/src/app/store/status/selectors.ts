import {RootState} from "..";

export const selectSlice = (state: RootState) => state.status
export const selectItems = (state: RootState) => selectSlice(state).items;
export const selectDropdownItems = (state: RootState) => {

    return selectSlice(state).items.map(status => {
        return {
            label: status.name,
            value: status.id,
            bg: status.bg,
            color: status.color,
        }
    }) || []
};
export const selectStatus = (state: RootState) => selectSlice(state).status;
export const selectLoaded = (state: RootState) => selectSlice(state).loaded;
