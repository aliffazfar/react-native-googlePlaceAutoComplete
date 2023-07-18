import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=${Config.PLACE_AUTO_COMPLETE_KEY}`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    },
  );
  return (await response.json()).data;
});
