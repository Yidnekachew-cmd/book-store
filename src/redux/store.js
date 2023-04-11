import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/booksSlice';
import categoriesSlice from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categorie: categoriesSlice,
  },
});

export default store;
