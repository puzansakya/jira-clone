import * as fromSlice from "../slice";

export const clearBoardPageData = (): any => (dispatch: any) => {
    dispatch(fromSlice.clear())
}
