import React from "react";
import AddBook from "./AddBook";
import { useBooks } from "../hooks/useBooks";

import "../index.css";

const BooksList = () => {
  const { books, isLoading, loadMoreBooks, hasNextPage, addNewBook } =
    useBooks();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="books-page-container">
      <div className="books-list-container">
        <h1>Books</h1>
        {books.map((book) => (
          <p key={book?.id}>{book?.title}</p>
        ))}
        <button onClick={loadMoreBooks} disabled={!hasNextPage}>
          Load More
        </button>
      </div>
      <div className="add-book-container">
        <AddBook onSubmit={addNewBook} />
      </div>
    </div>
  );
};

export default BooksList;
