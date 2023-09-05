import { AppDispatch } from '..';
import * as fromSlice from './slice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(fromSlice.fetchRequest());

  const response = await fetch(`http://localhost:8000/api/v1/users`);
  const { data: issues } = await response.json();

  dispatch(fromSlice.fetchSuccess(issues));
};
