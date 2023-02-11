import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk(
  'products/fetchReadProducts',
  async ({ productsPage, productsPageSize }, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/products?pagination[page]=${productsPage}&pagination[pageSize]=${productsPageSize}&populate=image&sort=id%3Adesc`
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadProduct = createAsyncThunk(
  'products/fetchReadProduct',
  async (slug, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/products?filters[slug][$eq]=${slug}&populate=image`
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);