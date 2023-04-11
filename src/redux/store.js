import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './Books/booksSlice';
import categoriesSlice from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: booksSlice,
    categorie: categoriesSlice,
  },
});

export default store;
