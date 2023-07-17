
import { createSlice } from "@reduxjs/toolkit";
import * as fromInterface from '../../ts';

export interface PriorityState {
    items: any[];
    loaded: boolean
    status: fromInterface.State.IDLE | fromInterface.State.LOADING;
}

const initialState: PriorityState = {
    items: [],
    loaded: false,
    status: fromInterface.State.LOADING
};

const prioritySlice = createSlice({
    name: "priority",
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
} = prioritySlice.actions

export default prioritySlice.reducer;
