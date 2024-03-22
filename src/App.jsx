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
import useDebounce from "./hooks/useDebounce";
const key = import.meta.env.VITE_API_KEY;

// Helper function to fetch books
const fetchBooks = async (query, setBooksData, setIsLoading, setError) => {
  if (!query || query.length < 4) {
    setBooksData([]);
    setIsLoading(false);
    return;
  }
  setIsLoading(true);
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
    );
    if (response.data && !response.data.items?.length)
      throw new Error("No Books Data Available");
    setBooksData(formatBookResponse(response.data));
    setError("");
  } catch (error) {
    setError(error?.message);
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  useEffect(() => {
    setError("");
    fetchBooks(debouncedQuery, setBooksData, setIsLoading, setError);
  }, [debouncedQuery]);

  return (
    <>
      <Navbar booksData={booksData} query={query} setQuery={setQuery} />
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
