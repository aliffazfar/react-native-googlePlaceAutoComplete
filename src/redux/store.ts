import {combineReducers, configureStore} from '@reduxjs/toolkit';

import messageReducer from './slices/message';

const reducer = combineReducers({
  message: messageReducer,
});

const store = configureStore({
  reducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
