import * as fromSlice from "../slice";
import * as fromActions from "../actions";

export const clearFilters = (): any => (dispatch: any) => {
    dispatch(fromSlice.clearFilters())
    dispatch(fromActions.fetchBoardData())
}

