import styles from './modules/Books.module.css';

const Books = () => (
  <div className={styles.container}>
    <ul className={styles.bookItems}>
      <li className={styles.bookItem}>
        <div className={styles.bookContent}>
          <p className={styles.School}>Action</p>
          <h2 className={styles.Title}>The Hunger Games</h2>
          <p className={styles.SuzanneCollins}>Suzanne Collins</p>
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
              <p className={styles.Percentage}>64%</p>
              <h3 className={styles.Completed}>Completed</h3>
            </div>
          </div>
          <div className={styles.bookUpdate}>
            <p className={styles.Current}>CURRENT CHAPTER</p>
            <h3 className={styles.Chapter}>Chapter 17</h3>
            <button className={styles.button} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
      <li className={styles.bookItem}>
        <div className={styles.bookContent}>
          <p className={styles.School}>Science Fiction</p>
          <h2 className={styles.Title}>Dune</h2>
          <p className={styles.SuzanneCollins}>Frank Herbert</p>
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
              <p className={styles.Percentage}>8%</p>
              <h3 className={styles.Completed}>Completed</h3>
            </div>
          </div>
          <div className={styles.bookUpdate}>
            <p className={styles.Current}>CURRENT CHAPTER</p>
            <h3 className={styles.Chapter}>Chapter 3: &quot;A Lesson Learned&quot;</h3>
            <button className={styles.button} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
      <li className={styles.bookItem}>
        <div className={styles.bookContent}>
          <p className={styles.School}>Economy</p>
          <h2 className={styles.Title}>Capital in the Twenty-First Century</h2>
          <p className={styles.SuzanneCollins}>Suzanne Collins</p>
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
              <p className={styles.Percentage}>0%</p>
              <h3 className={styles.Completed}>Completed</h3>
            </div>
          </div>
          <div className={styles.bookUpdate}>
            <p className={styles.Current}>CURRENT CHAPTER</p>
            <h3 className={styles.Chapter}>Introduction</h3>
            <button className={styles.button} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
    </ul>
    <hr className={styles.hr} />
    <form action="" className={styles.form}>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <div className={styles.formInputs}>
        <input type="text" name="title" id="bookTitle" className={styles.bookTitle} placeholder="Book title" />
        <input type="text" name="author" id="bookAuthor" className={styles.bookAuthor} placeholder="Author" />
        <button type="submit" className={styles.addBook}>ADD BOOK</button>
      </div>
    </form>
  </div>
);

export default Books;
