import { AppDispatch } from "..";
import * as fromSlice from "./slice";

export const fetchPriorities = () => async (dispatch: AppDispatch) => {
    dispatch(fromSlice.fetchRequest())

    const response = await fetch(`http://localhost:8000/api/v1/priorities`);
    const { data: statuses } = await response.json();

    dispatch(fromSlice.fetchSuccess(statuses))
}
