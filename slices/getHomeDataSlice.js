import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios";
const initialState = {};
export const getHomeData = createAsyncThunk("get token", async (payload) => {
    const response = await axiosInstance
        .get(
            "/products"
        )
        .then((res) => {
            return res.data;
        });
    return response;
});

const getHomeDataSlice = createSlice({
    name: "getHomeDataSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomeData.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});
export default getHomeDataSlice.reducer;
