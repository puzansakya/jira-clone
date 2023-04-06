import * as fromSlice from "../slice";

export const fetchUsers: any = () => async (dispatch: any, getState: any) => {
    dispatch(fromSlice.fetchRequest())


    const response = await fetch(`http://localhost:8000/api/v1/users`);
    const { data: issues } = await response.json();

    dispatch(fromSlice.fetchSuccess(issues))
}
