import {createSlice} from '@reduxjs/toolkit';
import {fetchPlaceDetail} from '../thunk';
import {Item} from '../../components';

interface state {
  data?: fetchPlaceDetailResponses;
  isLoading: boolean;
  isError: boolean;
  recentSearches?: Item[];
  recentGeometry?: {
    latitude: number;
    longitude: number;
  };
  error?: null | string;
}

const iniialState: state = {
  isLoading: false,
  isError: false,
  error: null,
};

const placeDetailSlice = createSlice({
  name: 'placeDetail',
  initialState: iniialState,
  reducers: {
    addRecentSearches: (state, action) => {
      if (state.recentSearches) {
        const keyExisted = !!state.recentSearches.find(
          item => item.value == action.payload.value,
        );
        if (!keyExisted) state.recentSearches.unshift(action.payload);
      } else {
        state.recentSearches = [action.payload];
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPlaceDetail.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlaceDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.recentGeometry = {
        latitude: action.payload.result.geometry.location.lat,
        longitude: action.payload.result.geometry.location.lng,
      };
      state.isLoading = false;
    });
    builder.addCase(fetchPlaceDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isError = true;
    });
  },
});

export const {addRecentSearches} = placeDetailSlice.actions;
export default placeDetailSlice.reducer;
