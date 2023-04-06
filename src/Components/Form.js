import styles from './modules/Form.module.css';

const Form = () => (
  <div className={styles.container}>
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
export default Form;
