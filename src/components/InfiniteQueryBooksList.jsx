import React from "react";
import AddBook from "./AddBook";
import { useInfiniteQueryBooks } from "../hooks/useInfiniteQueryBooks";
import "../index.css";

const InfiniteQueryBooksList = () => {
  const {
    isLoading,
    fetchNextPage,
    hasNextPage,
    addNewBook,
    books,
    deleteBook,
  } = useInfiniteQueryBooks();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="books-page-container">
      <div className="books-list-container">
        <h1>Books</h1>
        {books?.map((book) => (
          <p key={book?.id}>
            {book?.title}
            <span className="delete-books" onClick={() => deleteBook(book?.id)}>
              {" - DEL"}
            </span>
          </p>
        ))}
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load More
        </button>
      </div>
      <div className="add-book-container">
        <AddBook onSubmit={addNewBook} />
      </div>
    </div>
  );
};

export default InfiniteQueryBooksList;
