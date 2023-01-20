import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from "../features/items/itemsSlice";
import basketProdReducer from "../features/basket-products/basketProdSlice";
import  categoriesReducer from '../features/Categories/categoriesSlice';


export const store = configureStore({
   reducer: {
      items: itemsReducer,
      basketProducts: basketProdReducer,
      categories: categoriesReducer
   },
});
