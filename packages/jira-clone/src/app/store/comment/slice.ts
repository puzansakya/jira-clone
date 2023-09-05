import { createSlice } from '@reduxjs/toolkit';
import * as fromInterface from '../../ts';

export interface ICommentState {
  items : fromInterface.IComment[];
  status: fromInterface.State.IDLE | fromInterface.State.LOADING;
  loaded: boolean;
}

const initialState: ICommentState = {
  items : [],
  status: fromInterface.State.LOADING,
  loaded: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.status = fromInterface.State.LOADING;
    },
    fetchSuccess: (state, { payload }) => {
      state.items  = payload;
      state.status = fromInterface.State.IDLE;
      state.loaded = true;
    },
    clear: (state) => {
      state = initialState;
    },
  },
  extraReducers: {},
});

export const { fetchRequest, fetchSuccess, clear } = commentSlice.actions;
export default commentSlice.reducer;
