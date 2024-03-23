/* eslint-disable react/prop-types */

const BookRead = ({ book }) => {
  return (
    <li className="flex gap-3 mb-2">
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
    </li>
  );
};

export default BookRead;
