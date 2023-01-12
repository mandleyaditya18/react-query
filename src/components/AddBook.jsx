import React, { useState, useCallback } from "react";

const AddBook = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    onSubmit(title, author);
    setTitle("");
    setAuthor("");
  });

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
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
