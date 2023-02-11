import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProduct, fetchReadProducts } from "../thunks/productsThunk";

const initialState = {
  loading: false,
  error: {},
  products: [],
  productsMeta: {},
  productsPage: 1,
  productsPageSize: 8,
  product: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.loading = false;
      state.error = {};
      state.products = [];
      state.productsMeta = {};
      state.productsPage = 1;
      state.productsPageSize = 8;
      state.product = {};
    },
    incrementProductsPage: (state) => {
      state.productsPage++;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      if (action.payload.meta.pagination.page === 1) {
        state.products = action.payload.data;
      } else {
        state.products = [...state.products, ...action.payload.data];
      }
      state.productsMeta = action.payload.meta;
    });
    builder.addCase(fetchReadProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
    builder.addCase(fetchReadProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.product = action.payload.data[0];
    });
    builder.addCase(fetchReadProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = {};
    });
  }
});

export const { resetProducts, incrementProductsPage } = productsSlice.actions;

export default productsSlice.reducer;