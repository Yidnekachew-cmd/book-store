import PropTypes from 'prop-types';
import styles from './modules/Book.module.css';

const Book = ({ books }) => (
  <div className={styles.container}>
    <ul className={styles.bookItems}>
      {
      books.map((book) => (
        <li key={book.id} className={styles.bookItem}>
          <div className={styles.bookContent}>
            <p className={styles.School}>{book.bookType}</p>
            <h2 className={styles.Title}>{book.bookTitle}</h2>
            <p className={styles.SuzanneCollins}>{book.bookAuthor}</p>
            <ul className={styles.bookEditor}>
              <li className={styles.Comments}>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
          <div className={styles.status}>
            <div className={styles.bookStatus}>
              <div className={styles.OvalPercentage} />
              <div className={styles.PercentageWraper}>
                <p className={styles.Percentage}>{book.percentage}</p>
                <h3 className={styles.Completed}>Completed</h3>
              </div>
            </div>
            <div className={styles.bookUpdate}>
              <p className={styles.Current}>CURRENT CHAPTER</p>
              <h3 className={styles.Chapter}>{book.CurrentChapter}</h3>
              <button className={styles.button} type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </li>
      ))
      }

    </ul>
    <hr className={styles.hr} />
  </div>
);

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
      bookType: PropTypes.string.isRequired,
      bookTitile: PropTypes.string.isRequired,
      bookAuthor: PropTypes.string.isRequired,
      CurrentChapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
