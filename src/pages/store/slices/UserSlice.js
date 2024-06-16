import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:'user',
    initialState:{
         user:null,
         loading:false    
    },
    reducer:{
        login:(state, action)=>{
            
        }
    }
})

export default userSlice.reducer;