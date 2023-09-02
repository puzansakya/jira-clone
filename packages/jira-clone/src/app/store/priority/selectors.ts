import {RootState} from "..";

export const selectSlice = (state: RootState) => state.priority
export const selectItems = (state: RootState) => selectSlice(state).items;
export const selectDropdownItems = (state: RootState) => {
    return selectSlice(state).items.map(priority => {
        return {
            label: priority.name,
            value: priority.id,
            icon: priority.icon,
        }
    })
};
export const selectStatus = (state: RootState) => selectSlice(state).status;
export const selectLoaded = (state: RootState) => selectSlice(state).loaded;
