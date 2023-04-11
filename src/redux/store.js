import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './Books/booksSlice';

const store = configureStore({
  reducer: booksSlice,
});

export default store;
