import {createSlice} from '@reduxjs/toolkit';
import {fetchPlaces} from '../thunk';

interface state {
  data?: fetchPlacesResponses;
  isLoading: boolean;
  error?: null | string;
}

const iniialState: state = {
  isLoading: false,
  error: null,
};

const placesSlice = createSlice({
  name: 'message',
  initialState: iniialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPlaces.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = placesSlice.actions;
export default placesSlice.reducer;
