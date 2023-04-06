import { AppDispatch } from "../..";
import * as fromProjectBoardStore from "./../../board";
import * as fromUserStore from "./../../user";

export const fetchPageData: any = (): any => (dispatch: AppDispatch) => {
    dispatch(fromProjectBoardStore.fetchBoardData())
    dispatch(fromUserStore.fetchUsers())
}