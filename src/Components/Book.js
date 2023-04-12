import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './modules/Book.module.css';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.bookItem}>
      <div className={styles.bookContent}>
        <p className={styles.School}>{book.category}</p>
        <h2 className={styles.Title}>{book.title}</h2>
        <p className={styles.SuzanneCollins}>{book.author}</p>
        <ul className={styles.bookEditor}>
          <li className={styles.Comments}>Comments</li>
          <div className={styles.line} />
          <li className={styles.remove}>
            <button
              type="button"
              onClick={
          () => dispatch(deleteBook(book.item_id))
            .then(() => dispatch(removeBook(book.item_id)))
          }
            >
              {' '}
              Remove
            </button>
          </li>
          <div className={styles.line} />
          <li>Edit</li>
        </ul>
      </div>
      <div className={styles.status}>
        <div className={styles.bookStatus}>
          <div className={styles.OvalPercentage} />
          <div className={styles.PercentageWraper}>
            <p className={styles.Percentage}>67%</p>
            <h3 className={styles.Completed}>Completed</h3>
          </div>
        </div>
        <div className={styles.bookUpdate}>
          <p className={styles.Current}>CURRENT CHAPTER</p>
          <h3 className={styles.Chapter}>Chapter 7</h3>
          <button className={styles.button} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      titile: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      CurrentChapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
