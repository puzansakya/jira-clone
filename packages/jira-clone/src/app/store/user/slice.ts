import { createSlice } from '@reduxjs/toolkit';
import * as fromInterface from '../../ts';

export interface UserState {
  items : fromInterface.IUserCollection;
  status: fromInterface.State.IDLE | fromInterface.State.LOADING;
  loaded: boolean;
}

const initialState: UserState = {
  items : [],
  status: fromInterface.State.LOADING,
  loaded: false,
};

const userSlice = createSlice({
  name: 'user',
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

export const { fetchRequest, fetchSuccess, clear } = userSlice.actions;
export default userSlice.reducer;
