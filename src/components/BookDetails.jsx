/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { prepareBookObject } from "../services/FormatBookResponse";

const BookDetails = ({ selectedId, handleBack }) => {
  const getBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${selectedId}`
      );
      console.log(prepareBookObject(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBookDetails();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleBack} className="px-2 py-2 text-xl">
          🔙
        </button>
      </div>
      {selectedId}
    </div>
  );
};

export default BookDetails;
