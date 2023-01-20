import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from './categories_API';


export const initialState = {
   data: [],
   status: ""
};

export const getData = createAsyncThunk(
   "categories/API",
   async () => {
      const res = await fetchData();
      return res.data
   }
)

export const  categories = createSlice({
   name: "categories",
   initialState,
   reducers: {
      acceptData: (state, action) => {
         state.push(action.payload);
      }
   }, 
   extraReducers: (builder) => {
      builder
         .addCase(getData.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getData.fulfilled, (state, action) => {
            state.status = 'idle';
            state.data.push(...action.payload);
         })
         .addCase(getData.rejected, (state, action) => {
            state.status = 'rejected';
         });
   },
});

export const { acceptData } = categories.actions;
export const categoriesData = state => state.categories.data;
export const categoriesDataStatus = state => state.categories.status;

export default  categories.reducer;


