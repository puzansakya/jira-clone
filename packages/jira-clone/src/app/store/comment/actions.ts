import { AppDispatch } from '..';
import { IComment } from '../../ts/models/comment';
import { COMMENTS_API } from './api';
import * as fromSlice from './slice';

export const fetchComments: any =
  (issueId: number) => async (dispatch: AppDispatch) => {
    dispatch(fromSlice.fetchRequest());

    const response = await fetch(
      `${COMMENTS_API}?eager=commentBy&where=issueId:${issueId}`
    );
    const issues = await response.json();

    dispatch(fromSlice.fetchSuccess(issues.data));
  };

export const create =
  (payload: IComment) => async (dispatch: AppDispatch) => {
    // fetch post
    await fetch(COMMENTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    dispatch(fetchComments(payload.issueId));
  };

export const update: any =
  (payload: IComment) => async (dispatch: AppDispatch) => {
    const response = await fetch(COMMENTS_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    dispatch(fetchComments(payload.issueId));
  };

export const remove: any =
  (commentId: number, issueId: number) => async (dispatch: AppDispatch) => {
    await fetch(`${COMMENTS_API}/${commentId}`, {
      method: 'DELETE',
    });

    dispatch(fetchComments(issueId));
  };
