import {AppDispatch} from "../..";
import * as fromProjectBoardStore from "./../../board";
import * as fromUserStore from "./../../user";
import * as fromStatusStore from "./../../status";
import * as fromPriorityStore from "./../../priority";

export const fetchPageData: any = (): any => (dispatch: AppDispatch) => {
    dispatch(fromStatusStore.fetchStatuses())
    dispatch(fromPriorityStore.fetchPriorities())
    dispatch(fromProjectBoardStore.fetchBoardData())
    dispatch(fromUserStore.fetchUsers())
}