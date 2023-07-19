import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, endpoints} from '../../services';
import Config from 'react-native-config';

export const fetchPlaceDetail = createAsyncThunk(
  'data/fetchPlaceDetail',
  async (place_id: string) => {
    const response = await api.get(endpoints.PLACE_DETAIL, {
      params: {
        place_id: place_id,
        fields: 'name,formatted_address,geometry,opening_hours',
        key: Config.PLACE_AUTO_COMPLETE_KEY,
      },
    });
    const data = (await response.data) as fetchPlaceDetailResponses;
    return data;
  },
);
