/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import BooksList from "./components/BooksList";
import BooksReadSummary from "./components/BooksReadSummary";
import BooksReadList from "./components/BooksReadList";
import { formatBookResponse } from "./services/FormatBookResponse";
import axios from "axios";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const key = import.meta.env.VITE_API_KEY;
  const q = "hope+love";
  // console.log(key);
  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}`
        );
        if (response.data && !response.data.items?.length) {
          throw new Error("No Books Data Available");
        }
        setBooksData(formatBookResponse(response.data));
        setError("");
      } catch (error) {
        setError(error?.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [key, q]);
  console.log(booksData);
  return (
    <>
      <Navbar booksData={booksData} />
      <Main>
        <ListBox>
          {isLoading && <Loading />}
          {!isLoading && !error && <BooksList booksData={booksData} />}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          <BooksReadSummary />
          <BooksReadList booksReadData={booksReadData} />
        </ListBox>
      </Main>
    </>
  );
}

export default App;
