import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadServicesData = createAsyncThunk(
  'services/fetchReadServicesData',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: '/services?populate=image'
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);