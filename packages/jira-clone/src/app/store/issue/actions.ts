import { IIssue } from '../../ts/models/issue';
import * as fromBoardStore from './../board';
import { CREATE_ISSUE } from './api';
export const create: any = (data: Partial<IIssue>) => async (dispatch: any) => {
  const response = await fetch(CREATE_ISSUE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  dispatch(fromBoardStore.fetchBoardData());
};
