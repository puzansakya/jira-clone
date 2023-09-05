import { fetchBoardData } from '..';
import { AppDispatch } from '../..';

export const applyFilter = () => (dispatch: AppDispatch) => {
  dispatch(fetchBoardData());
};
