/* eslint-disable react/prop-types */

const BookRead = ({ book, onDeleteBook }) => {
  return (
    <li className="flex justify-between items-center gap-3 mb-2">
      <div className="flex">
        <img src={book.image} alt="image" className="w-16 h-20" />
        <div>
          <h3 className="font-semibold text-sm m-0">{book.title}</h3>
          <h2 className="font-semibold text-sm m-0">{book.subTitle}</h2>
          <div className="flex gap-2 items-center justify-start">
            <div>
              <span>⭐</span>
              <span>{book.rating.toFixed(1)}</span>
            </div>
            <div>
              <span>💥</span>
              <span>{book.userRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" onClick={onDeleteBook} className="text-xs">
          ✖️
        </a>
      </div>
    </li>
  );
};

export default BookRead;
