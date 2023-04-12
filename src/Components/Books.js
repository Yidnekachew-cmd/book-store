import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import styles from './modules/Books.module.css';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books.bookList);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.bookItems}>
          {books.map((book) => (
            <Book key={book.item_id} book={book} />
          ))}
        </ul>
        <hr className={styles.hr} />
      </div>
      <Form />
    </div>
  );
};

export default Books;
