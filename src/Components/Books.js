import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = [
    {
      bookType: 'Action',
      bookTitle: 'The Hunger Games',
      bookAuthor: 'Suzanne Collins',
      percentage: '64%',
      CurrentChapter: 'Chapter 17',
      id: '1',
    },
    {
      bookType: 'Science Fiction',
      bookTitle: 'Dune',
      bookAuthor: 'Frank Herbert',
      percentage: '8%',
      CurrentChapter: 'Chapter 3: "A Lesson Learned"',
      id: '2',
    },
    {
      bookType: 'Economy',
      bookTitle: 'Capital in the Twenty-First Century',
      bookAuthor: 'Suzanne Collins',
      percentage: '0%',
      CurrentChapter: 'Introduction',
      id: '3',
    },
  ];
  return (
    <div>
      <Book books={books} />
      <Form />
    </div>
  );
};

export default Books;
