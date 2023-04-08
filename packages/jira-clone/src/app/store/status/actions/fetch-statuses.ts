import * as fromSlice from "../slice";

export const fetchStatuses: any = () => async (dispatch: any, getState: any) => {
    dispatch(fromSlice.fetchRequest())

    const response = await fetch(`http://localhost:8000/api/v1/statuses`);
    const { data: statuses } = await response.json();

    dispatch(fromSlice.fetchSuccess(statuses))
}
