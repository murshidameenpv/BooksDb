/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { prepareBookObject } from "../services/FormatBookResponse";
import Loading from "./Loading";
import StarRating from "./StarRating";

const BookDetails = ({ selectedId, handleBack }) => {
  const [bookDetails, setBookDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div>
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
        </div>
      )}
    </div>
  );
};

export default BookDetails;
