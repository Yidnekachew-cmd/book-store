import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = '0oAdGXlTQNVrBRNIl8zC';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

const initialState = {
  bookList: [],
  isLoading: false,
  isBookAdded: false,
  isBookRemoved: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },

    removeBook: (state, action) => {
      const books = [...state.bookList];
      state.bookList.splice(0, state.bookList.length);
      state.bookList.push(...books.filter((book) => book.item_id !== action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookList = Object.keys(action.payload).map(
          (key) => (
            {
              item_id: key,
              title: action.payload[key][0].title,
              author: action.payload[key][0].author,
            }),
        );
        return ({
          ...state,
          isLoading: false,
          bookList,
        });
      })
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isBookRemoved: false,
      }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        isBookRemoved: true,
      }));
  },
});

// const initialState = [
//   {
//     item_id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//     percentage: '64%',
//     CurrentChapter: 'Chapter 17',
//   },
//   {
//     item_id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//     percentage: '8%',
//     CurrentChapter: 'Chapter 3: "A Lesson Learned"',
//   },
//   {
//     item_id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//     percentage: '0%',
//     CurrentChapter: 'Introduction',
//   },
// ];

// export const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//     removeBook: (state, action) => {
//       const books = [...state];
//       state.splice(0, state.length);
//       state.push(...books.filter((book) => book.item_id !== action.payload));
//     },
//   },
// });

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
