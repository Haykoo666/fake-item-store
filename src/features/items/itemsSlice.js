import {
   createAsyncThunk,
   createSlice
} from '@reduxjs/toolkit';
import {
   fetchData
} from './items_API';

const initialState = {
   value: [],
   status: '',
};

export const getData = createAsyncThunk(
   'items/itemsAPI',
   async () => {
      const response = await fetchData();
      return response.data;
   }
   
);

export const itemsSlice = createSlice({
   name: 'items',
   initialState,

   reducers: {
      acceptData: (state, action) => {
         console.log("🚀 ~ file: itemsSlice.js ~ line 29 ~ state", JSON.stringify(state, null, 6))
         state.value.products.push(...action.payload);
      },
      changeItemsByCategory: (state, action) => {
         state.value.products.length = 0;
         state.value.products.push(...action.payload.products);
         
      }
      
   },
   extraReducers: (builder) => {
      builder
         .addCase(getData.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getData.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
         });
   },
});

export const selectCount = (state) => state.items.value;
export const { changeItemsByCategory, acceptData } = itemsSlice.actions;

export default itemsSlice.reducer;