import { RootState } from "..";
import isEmpty from "lodash/isEmpty";
import some from "lodash/some";

export const selectSlice = (state: RootState) => state.board
export const selectBoardData = (state: RootState) => selectSlice(state).boardData;
export const selectBoardStatus = (state: RootState) => selectSlice(state).status;
export const selectFilters = (state: RootState) => selectSlice(state).filters;
export const selectIsFilterClearable = (state: RootState) => {
    const filters = selectFilters(state);
    return !isEmpty(filters.query) || !isEmpty(filters.users);
    // return !some(selectSlice(state).filters, isEmpty);
};
