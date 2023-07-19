import {createSlice} from '@reduxjs/toolkit';
import {fetchPlaceDetail} from '../thunk';

interface state {
  data?: fetchPlaceDetailResponses;
  isLoading: boolean;
  error?: null | string;
}

const iniialState: state = {
  isLoading: false,
  error: null,
};

const placeDetailSlice = createSlice({
  name: 'placeDetail',
  initialState: iniialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPlaceDetail.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPlaceDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPlaceDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = placeDetailSlice.actions;
export default placeDetailSlice.reducer;
