import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksList from "./components/BooksList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/books" element={<BooksList />} />
      </Routes>
    </>
  );
}

export default App;
