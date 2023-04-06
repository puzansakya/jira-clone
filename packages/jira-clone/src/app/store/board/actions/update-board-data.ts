import * as fromSlice from "./../slice";

export const updateBoardData: any = (payload: any) => async (dispatch: any) => {
    dispatch(fromSlice.updateBoardData(payload))
}
