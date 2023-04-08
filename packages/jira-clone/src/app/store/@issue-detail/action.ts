import { AppDispatch } from "..";
import * as fromStatusStore from "./../status";
import * as fromIssueStore from "./../board";

export const fetchPageData: any = (issueId: string): any => (dispatch: AppDispatch) => {
    dispatch(fromStatusStore.fetchStatuses())
    return dispatch(fromIssueStore.fetchIssueDetail(issueId))
}