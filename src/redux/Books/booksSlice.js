import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
    percentage: '64%',
    CurrentChapter: 'Chapter 17',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    percentage: '8%',
    CurrentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
    percentage: '0%',
    CurrentChapter: 'Introduction',
  },
];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const books = [...state];
      state.splice(0, state.length);
      state.push(...books.filter((book) => book.item_id !== action.payload));
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
