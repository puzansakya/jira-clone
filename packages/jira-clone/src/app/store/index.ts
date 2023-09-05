import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { useDispatch } from 'react-redux';
import board from './board/slice';
import comment from './comment/slice';
import issueType from './issue-type/slice';
import priority from './priority/slice';
import status from './status/slice';
import user from './user/slice';

export const store = configureStore({
  reducer: {
    board,
    user,
    status,
    priority,
    issueType,
    comment,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);
