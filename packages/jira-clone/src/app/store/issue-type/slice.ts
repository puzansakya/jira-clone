import { createSlice } from '@reduxjs/toolkit';
import * as fromInterface from '../../ts';

export interface IIssueTypeState {
  items: any[];
  status: fromInterface.State.IDLE | fromInterface.State.LOADING;
  loaded: boolean;
}

const initialState: IIssueTypeState = {
  items: [],
  status: fromInterface.State.LOADING,
  loaded: false,
};

const typeSlice = createSlice({
  name: 'issue type',
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.status = fromInterface.State.LOADING;
    },
    fetchSuccess: (state, { payload }) => {
      state.items = payload;
      state.status = fromInterface.State.IDLE;
      state.loaded = true;
    },
    clear: (state) => {
      state = initialState;
    },
  },
  extraReducers: {},
});

export const { fetchRequest, fetchSuccess, clear } = typeSlice.actions;
export default typeSlice.reducer;
