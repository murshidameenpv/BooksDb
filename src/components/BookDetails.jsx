/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { prepareBookObject } from "../services/FormatBookResponse";
import Loading from "./Loading";
import StarRating from "./StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = ({ selectedId, handleBack, onBookRead, booksReadData }) => {
  const [bookDetails, setBookDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const isRated = booksReadData.map((book) => book.id).includes(selectedId);
  const ratedBook = booksReadData.find((book) => book.id === selectedId);
  // console.log(ratedBook);
  useEffect(() => {
    const getBookDetails = async () => {
      setBookDetails("");
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${selectedId}`
        );
        setBookDetails(prepareBookObject(response.data));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getBookDetails();
  }, [selectedId]);

  //for changing the title of browser tab
  useEffect(() => {
    if (!bookDetails) return;
    document.title = `Book - ${bookDetails.title}`;
    return () => {document.title = "My Books"};
  }, [bookDetails]);

  const handleBookRead = (book) => {
    onBookRead({ ...book, userRating });
    toast.success("Book added to read list!");
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <button onClick={handleBack} className="px-2 py-2 text-xl">
          🔙
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-2 gap-3 space-x-2 p-1">
          <div className="flex items-start">
            <div className="">
              <img
                src={bookDetails.image}
                alt={bookDetails.title || "Book cover"}
              />
            </div>
            <div className="mx-2">
              <h2 className="font-semibold text-xl">{bookDetails.title}</h2>
              <h3 className="font-extrabold text-sm italic py-2 px-3">
                {bookDetails.subTitle}
              </h3>
              <ul className="m-0 text-sm my-2 py-2 px-3 font-medium">
                <li>Year : {bookDetails.publishedYear}</li>
                <li>Author : {bookDetails.author}</li>
                <li>ISBN : {bookDetails.isbn}</li>
              </ul>
            </div>
          </div>
          <div>Rate Book:</div>
          <StarRating />
          {isRated ? (
            <p className="italic font-semibold text-sm">
              You Already Rated ,Your Rating is :{ratedBook.userRating} Stars
            </p>
          ) : (
            <>
              <StarRating
                maxRating={10}
                color={"text-pink-700"}
                onSetUserRating={setUserRating}
              />
              <div className="flex items-end justify-around gap-3">
                <div>The Book Has {userRating} Ratings</div>
                <div>
                  {userRating > 0 && (
                    <button
                      onClick={() => handleBookRead(bookDetails)}
                      className="px-3 text-white text-xs py-1 rounded-md bg-fuchsia-800 hover:bg-fuchsia-700"
                    >
                      Add To List
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
