import { createSlice } from '@reduxjs/toolkit';
import * as fromInterface from '../../ts';

export interface IssueState {
  boardData: fromInterface.InitialData<fromInterface.Task>;
  filters: {
    query: string;
    users: any[];
  };
  status: fromInterface.State.IDLE | fromInterface.State.LOADING;
}

const initialState: IssueState = {
  boardData: {
    blocks: {},
    columns: {},
    columnOrder: [],
  },
  filters: {
    query: '',
    users: [],
  },
  status: fromInterface.State.LOADING,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.status = fromInterface.State.LOADING;
    },
    fetchSuccess: (state, { payload }) => {
      state.boardData = payload;
      state.status = fromInterface.State.IDLE;
    },
    syncFilters: (state, action) => {
      state.filters = action.payload;
    },
    clear: (state) => {
      state.boardData = {
        blocks: {},
        columns: {},
        columnOrder: [],
      };
      state.filters = {
        query: '',
        users: [],
      };
      state.status = fromInterface.State.IDLE;
    },
    updateBoardData: (state, action) => {
      state.boardData = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        query: '',
        users: [],
      };
    },
  },
  extraReducers: {
    // [updateBoardData.fulfilled.toString()]: (state, { payload }) => {
    //     state.boardData = payload
    // },
  },
});

export const {
  updateBoardData,
  fetchRequest,
  fetchSuccess,
  syncFilters,
  clearFilters,
  clear,
} = boardSlice.actions;
export default boardSlice.reducer;
