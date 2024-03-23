/* eslint-disable react/prop-types */
const noImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const BooksList = ({ booksData, handleSelectedId }) => {
  return (
    <div>
      <ul className="p-0 m-0">
        {booksData.map((book) => (
          <li
            key={book.isbn}
            className="flex gap-4 my-2"
            onClick={() => handleSelectedId(book.isbn)}
          >
            <img
              src={book.image || noImageUrl}
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
