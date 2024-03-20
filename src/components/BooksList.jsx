/* eslint-disable react/prop-types */
import React from 'react'

const BooksList = ({booksData}) => {
  return (
    <div>
      <ul className="p-0 m-0">
        {booksData.map((book) => (
          <li key={book.isbn} className="flex gap-4 my-2">
            <img src={book.image} alt="img" className="w-16 h-24" />
            <div>
              <h3 className="m-0 font-bold">{book.title}</h3>
              <div>Year : {book.publishedYear}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList