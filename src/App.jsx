import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksList from "./components/BooksList";
import InfiniteQueryBooksList from "./components/InfiniteQueryBooksList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/iq-books" element={<InfiniteQueryBooksList />} />
      </Routes>
    </>
  );
}

export default App;
