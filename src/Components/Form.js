import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './modules/Form.module.css';
import { addBook } from '../redux/Books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) dispatch(addBook({ item_id: uuidv4(), title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
        <div className={styles.formInputs}>
          <input
            type="text"
            name="title"
            id="bookTitle"
            className={styles.bookTitle}
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name="author"
            id="bookAuthor"
            className={styles.bookAuthor}
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit" className={styles.addBook}>ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
