
import { createSlice } from "@reduxjs/toolkit";
import * as fromInterface from '../../ts';

export interface StatusState {
    items: any[];
    loaded: boolean
    status: fromInterface.State.IDLE | fromInterface.State.LOADING;
}

const initialState: StatusState = {
    items: [],
    loaded: false,
    status: fromInterface.State.LOADING
};

const statusSlice = createSlice({
    name: "status",
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
} = statusSlice.actions

export default statusSlice.reducer;
