import * as fromSlice from "../slice";
import * as fromSelectors from "../selectors";

export const fetchBoardData: any = () => async (dispatch: any, getState: any) => {
    dispatch(fromSlice.fetchRequest())

    const state = getState();

    const filters = fromSelectors.selectFilters(state);

    const searchParams = new URLSearchParams({
        ...(filters.query && { search: filters.query }),
        reporterIds: filters.users.join(",")
    })
    const response = await fetch(`http://localhost:8000/api/v1/issues?${searchParams}`);
    const { data: issues } = await response.json();

    dispatch(fromSlice.fetchSuccess(issues))
}
