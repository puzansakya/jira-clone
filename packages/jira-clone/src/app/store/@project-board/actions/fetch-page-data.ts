import {AppDispatch} from "../..";
import * as fromProjectBoardStore from "./../../board";
import * as fromUserStore from "./../../user";
import * as fromStatusStore from "./../../status";
import * as fromPriorityStore from "./../../priority";
import * as fromTypeStore from "./../../issue-type";

export const fetchPageData: any = (): any => (dispatch: AppDispatch) => {
    dispatch(fromStatusStore.fetchStatuses())
    dispatch(fromPriorityStore.fetchPriorities())
    dispatch(fromProjectBoardStore.fetchBoardData())
    dispatch(fromUserStore.fetchUsers())
    dispatch(fromTypeStore.fetchIssueTypes())
}