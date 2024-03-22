/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import BooksList from "./components/BooksList";
import StudiedList from "./components/StudiedList";
import BooksReadSummary from "./components/BooksReadSummary";
import BooksReadList from "./components/BooksReadList";

function App() {
  const Books = [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript",
      rating: 4.5,
      publisher: "No Starch Press",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2012,
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      rating: 3.9,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2014,
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      rating: 4.1,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2022,
    },
    {
      isbn: "9781491950296",
      title: "Programming JavaScript Applications",
      rating: 4.2,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2002,
    },
  ];
  const booksRead = [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript",
      rating: 4.5,
      publisher: "No Starch Press",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2012,
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript",
      rating: 3.9,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2014,
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      rating: 4.1,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2022,
    },
    {
      isbn: "9250149325035",
      title: "C++ ",
      rating: 4.1,
      publisher: "O'Reilly Media",
      image:
        "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
      publishedYear: 2022,
    },
  ];
  const [booksData, setBooksData] = useState(Books);
  const [booksReadData, setBooksReadData] = useState(booksRead);
  return (
    <>
      <Navbar booksData={booksData} />
      <Main>
        <ListBox>
          <BooksList booksData={booksData} />
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
