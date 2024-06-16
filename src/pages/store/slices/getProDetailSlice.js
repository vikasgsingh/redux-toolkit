import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosInstance} from "../../../api/axios"

const initialState={
    loading:false,
    productDetail:'',
}


export const getproductDetails=createAsyncThunk("getproductDetails", async(id)=>{
    const response=await axiosInstance.get(`/products/${id}`).then((res)=>{
             return res?.data
    })
    return response
})


const getproductDetailSlice = createSlice({
    name:"getproductDetailSlice",
    initialState,
    extraReducers:(builder)=>{
         builder.addCase(getproductDetails.pending, (state)=>{
            state.loading=true
         })
         .addCase(getproductDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.productDetail = action.payload;
         })
         .addCase(getproductDetails.rejected,(state)=>{
            state.loading = true;
         })
    }
})

export default getproductDetailSlice.reducer;
