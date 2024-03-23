/* eslint-disable react/prop-types */
import BookRead from "./BookRead";
const BooksReadList = ({ booksReadData }) => {
  return (
    <ul className="m-0 p-2">
      {booksReadData.map((book) => (
        <BookRead key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BooksReadList;
