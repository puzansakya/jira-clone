import { RootState } from "..";

export const selectSlice = (state: RootState) => state.user
export const selectItems = (state: RootState) => selectSlice(state).items;
export const selectDropdownItems = (state: RootState) => selectSlice(state).items.map(item => ({
    label: `${item.firstName} ${item.lastName}`,
    value: item.id,
    src: item.avatar
}));
export const selectStatus = (state: RootState) => selectSlice(state).status;
