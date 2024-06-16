import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/axios";

const initialState = {
  loading: false,
  product: [],
  category: [],
};

export const getHomeData = createAsyncThunk("getHomeData", async () => {
  const response = await axiosInstance.get("/products").then((res) => {
    return res?.data;
  });
  return response;
});

export const getHomeCat = createAsyncThunk("getHomeCat", async () => {
  const response = await axiosInstance.get("products/categories").then((res) => {
    return res?.data;
  });
  return response;
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.copyProduct = action.payload;
      })
      .addCase(getHomeData.rejected, (state) => {
        state.loading = true;
      })
      .addCase(getHomeCat.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomeCat.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getHomeCat.rejected, (state) => {
        state.loading = true;
      });
  },
});

export default homeSlice.reducer;
