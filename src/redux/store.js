import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categorie: categoriesSlice,
  },
});

export default store;
