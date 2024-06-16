import { createSlice } from '@reduxjs/toolkit';

const initialCart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  cartData: initialCart || [],
  count: initialCart ? initialCart.length : 0,
};



const getCartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {    
    
    addCart: (state, action) => {
      const itemIndex = state.cartData.findIndex(item => item.id === action.payload.id)
      if (itemIndex==-1) {
        state.cartData.push({ ...action.payload, quantity: 1 });
      } 
      else {
        state.cartData[itemIndex].quantity++;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartData));
      state.count = state.cartData.length;
    },


    removeCart:(state, action)=>{
     const item= state.cartData.findIndex(item=>item.id==action.payload.id)
         (state.cartData[item].quantity>1? state.cartData[item].quantity--:1)
         localStorage.setItem('cart',JSON.stringify(state. cartData))
         state.count= state.cartData.length
    },

    
    deleteCart: (state, action) => {
      state.cartData = state.cartData.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cartData));
      state.count = state.cartData.length;
    }


  }
});

export const { addCart, removeCart, deleteCart } = getCartSlice.actions;
export default getCartSlice.reducer;
