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
import BookDetails from "./components/BookDetails";
const key = import.meta.env.VITE_API_KEY;

function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  const [selectedId, setSelectedId] = useState("");
  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedQuery || debouncedQuery.length < 3) {
        setBooksData([]);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${debouncedQuery}&key=${key}`,
          { signal }
        );
        if (response.data && !response.data.items?.length)
          throw new Error("No Books Data Available");
        setBooksData(formatBookResponse(response.data));
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error?.message);
        }
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    setError("");
    fetchBooks();
    return () => controller.abort();
  }, [debouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        console.log("closing");
        handleBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectedId = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? "" : id));
  };
  const handleBack = () => {
    setSelectedId("");
  };
  const handleBookRead = (book) => {
    setBooksReadData((prev) => [...prev, book]);
  };
  const handleDeleteBookRead = (bookId) => {
    let booksData = booksReadData.filter((book) => book.id !== bookId);
    setBooksReadData(booksData);
  };
  return (
    <>
      <Navbar booksData={booksData} query={query} setQuery={setQuery} />
      <Main>
        <ListBox>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <BooksList
              booksData={booksData}
              handleSelectedId={handleSelectedId}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <BookDetails
              selectedId={selectedId}
              handleBack={handleBack}
              onBookRead={handleBookRead}
              booksReadData={booksReadData}
            />
          ) : (
            <>
              <BooksReadSummary booksReadData={booksReadData} />
              <BooksReadList
                booksReadData={booksReadData}
                onDeleteBook={handleDeleteBookRead}
              />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}

export default App;
