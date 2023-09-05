import { AppDispatch } from '../..';
import * as fromInterface from '../../../ts';

export const updateIssue =
  (issue: fromInterface.IIssue) => async (dispatch: AppDispatch) => {
    await fetch(`http://localhost:8000/api/v1/issues`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue),
    });
  };
