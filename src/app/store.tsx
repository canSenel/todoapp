import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import itemreducer from "../states/itemreducer";
import { pokemonApi } from "../services/pokemon";

export const store: any = configureStore({
  reducer: {
    item: itemreducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
