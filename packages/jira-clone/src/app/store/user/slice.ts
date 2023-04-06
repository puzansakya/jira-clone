
import { createSlice } from "@reduxjs/toolkit";
import * as fromInterface from '../../ts';

export interface UserState {
    items: any[];
    status: fromInterface.State.IDLE | fromInterface.State.LOADING;
}

const initialState: UserState = {
    items: [],
    status: fromInterface.State.LOADING
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchRequest: (state) => {
            state.status = fromInterface.State.LOADING
        },
        fetchSuccess: (state, { payload }) => {
            state.items = payload
            state.status = fromInterface.State.IDLE
        },
        clear: (state) => {
            state = initialState
        },

    },
    extraReducers: {
    }
});

export const {
    fetchRequest,
    fetchSuccess,
    clear
} = userSlice.actions
export default userSlice.reducer;
