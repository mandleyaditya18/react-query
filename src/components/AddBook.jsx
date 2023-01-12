import React, { useState } from "react";

const AddBook = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit" disabled={!(title.length && author.length)}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
