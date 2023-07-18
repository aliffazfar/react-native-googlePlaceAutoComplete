import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from '../thunk/functions';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
    loading: false,
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;
