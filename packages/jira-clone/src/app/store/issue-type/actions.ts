import { FETCH_ISSUE_TYPE } from './api';
import * as fromSlice from './slice';

export const fetchIssueTypes: any =
  () => async (dispatch: any, getState: any) => {
    dispatch(fromSlice.fetchRequest());

    const response = await fetch(FETCH_ISSUE_TYPE);
    const { data: issues } = await response.json();

    dispatch(fromSlice.fetchSuccess(issues));
  };
