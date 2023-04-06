import * as fromSelectors from "../selectors";
import * as fromSlice from "../slice";


export const updateFilters = (filters: any): any => (dispatch: any, getState: any) => {
    const state = getState()
    const oldFilters: any = fromSelectors.selectFilters(state);


    const newUsers = oldFilters.users.includes(filters.user) ? oldFilters.users?.filter((id: any) => id !== filters.user) : [...oldFilters.users, filters.user]

    const newFilters = {
        ...oldFilters,
        query: filters.query,
        users: newUsers
    }

    dispatch(fromSlice.syncFilters(newFilters))
}
