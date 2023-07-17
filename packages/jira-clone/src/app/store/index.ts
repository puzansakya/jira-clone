import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query";
import {pokemonApi} from "./api/pokemon";
import {issueApi} from "./api/issue";

import board from "./board/slice";
import user from "./user/slice";
import status from "./status/slice";
import priority from "./priority/slice";

export const store = configureStore({
    reducer: {
        board,
        user,
        status,
        priority,

        // Add the generated reducer as a specific top-level slice
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [issueApi.reducerPath]: issueApi.reducer,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            pokemonApi.middleware,
            issueApi.middleware,
        ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)