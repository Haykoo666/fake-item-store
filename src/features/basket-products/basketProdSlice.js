import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];



export const basketProducts = createSlice({
   name: "basketProducts",
   initialState,
   reducers: {
      addProduct: (state, action) => {
         state.push(action.payload);
      },
      filterProducts: (state, action) => {
         state.length = 0;
         state.push(...action.payload);
      }
   }
});

export const selectProducts = state => state.basketProducts;

export const {addProduct, filterProducts} = basketProducts.actions;

export default basketProducts.reducer;