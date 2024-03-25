/* eslint-disable react/prop-types */
import BookRead from "./BookRead";
const BooksReadList = ({ booksReadData, onDeleteBook }) => {
  return (
    <ul className="m-0 p-2">
      {booksReadData.map((book) => (
        <BookRead
          key={book.id}
          book={book}
          onDeleteBook={() => onDeleteBook(book.id)}
        />
      ))}
    </ul>
  );
};

export default BooksReadList;
