import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, endpoints} from '../../services';
import Config from 'react-native-config';

export const fetchPlaces = createAsyncThunk(
  'queryPlaces/queryautocomplete',
  async (input: string) => {
    const response = await api.get(endpoints.QUERY_AUTO_COMPLETE, {
      params: {
        input: input,
        key: Config.PLACE_AUTO_COMPLETE_KEY,
      },
    });
    const data = (await response.data) as fetchPlacesResponses;
    return data;
  },
);
