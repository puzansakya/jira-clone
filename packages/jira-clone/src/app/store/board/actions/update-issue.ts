import * as fromSlice from "../slice";

export const updateIssue: any = (issue: any) => async (dispatch: any, getState: any) => {
    dispatch(fromSlice.fetchRequest())

    const response = await fetch(`http://localhost:8000/api/v1/issues`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(issue),
    });

    // dispatch(fromSlice.fetchSuccess(issues))
}
