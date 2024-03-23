/* eslint-disable react/prop-types */

const BooksList = ({ booksData, handleSelectedId }) => {
  return (
    <div>
      <ul className="p-0 m-0">
        {booksData.map((book) => (
          <li
            key={book.id}
            className="flex gap-4 my-2"
            onClick={() => handleSelectedId(book.id)}
          >
            <img
              src={book.image}
              alt="img"
              className="w-16 h-24"
            />
            <div>
              <h3 className="m-0 font-bold">{book.title}</h3>
              <div>
                <span className="text-xs font-semibold">Year :</span>
                <span className="text-xs font-medium">
                  {" "}
                  {book.publishedYear}
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold">Author:</span>
                <span className="text-xs font-medium"> {book.author}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
