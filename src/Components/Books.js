import { useSelector } from 'react-redux';
import styles from './modules/Books.module.css';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.bookItems}>
          {
      books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))
      }
        </ul>
        <hr className={styles.hr} />
      </div>
      <Form />
    </div>
  );
};

export default Books;
