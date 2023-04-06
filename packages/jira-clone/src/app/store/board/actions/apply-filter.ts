import { fetchBoardData } from "..";

export const applyFilter = (): any => (dispatch: any) => {
    dispatch(fetchBoardData())
}
