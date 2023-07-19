import {combineReducers, configureStore} from '@reduxjs/toolkit';
import queryPlacesSlice from './slices/queryPlacesSlice';
import placeDetailSlice from './slices/placeDetails';

const reducer = combineReducers({
  queryPlaces: queryPlacesSlice,
  placeDetail: placeDetailSlice,
});

const store = configureStore({
  reducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
