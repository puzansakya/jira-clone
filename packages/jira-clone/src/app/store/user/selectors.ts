import { RootState } from "..";

export const selectSlice = (state: RootState) => state.user
export const selectItems = (state: RootState) => selectSlice(state).items;
export const selectStatus = (state: RootState) => selectSlice(state).status;
