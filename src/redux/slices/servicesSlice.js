import { createSlice } from "@reduxjs/toolkit";
import { fetchReadServicesData } from "../thunks/servicesThunk";

const initialState = {
  loading: false,
  error: {},
  servicesData: []
};

export const servicesSlice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadServicesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadServicesData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.servicesData = action.payload.data;
    });
    builder.addCase(fetchReadServicesData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.servicesData = [];
    });
  }
});

export default servicesSlice.reducer;