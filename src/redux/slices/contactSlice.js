import { createSlice } from "@reduxjs/toolkit";
import { fetchReadContactData } from "../thunks/contactThunk";

const initialState = {
  loading: false,
  error: {},
  contactData: {}
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadContactData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadContactData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.contactData = action.payload.data;
    });
    builder.addCase(fetchReadContactData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.contactData = {};
    });
  }
});

export default contactSlice.reducer;