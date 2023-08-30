import { AppDispatch } from '..';
import * as fromUserStore from './../user';
import * as fromPriorityStore from './../priority';
import * as fromIssueTypeStore from './../issue-type';

export const fetchPageData: any =
  (issueId: string): any =>
  (dispatch: AppDispatch) => {
    dispatch(fromIssueTypeStore.fetchIssueTypes());
    dispatch(fromUserStore.fetchUsers());
    dispatch(fromPriorityStore.fetchPriorities());
  };

export {};
