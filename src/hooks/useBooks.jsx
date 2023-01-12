import { useState, useCallback } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { books as booksList } from "../../db.json";

const useBooks = () => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const fetchBooksList = ({ queryKey: [, page] }) => {
    return axios
      .get(`http://localhost:4000/books?_limit=2&_page=${page}`)
      .then((result) => result.data);
  };

  const addNewBook = async (title, author) => {
    const result = await axios.post("http://localhost:4000/books", {
      title,
      author,
    });
    return result;
  };

  const deleteBook = async (bookId) => {
    const res = await axios.delete(`http://localhost:4000/books/${bookId}`);
  };

  const onSuccess = useCallback(
    (data) => {
      setBooks((books) => [...books, ...data]);
    },
    [setBooks]
  );

  const onError = (error) => {
    console.error("Error: ", error);
  };

  const { data, isLoading } = useQuery(
    ["fetchBooksList", page],
    fetchBooksList,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onSuccess,
      onError,
    }
  );

  const loadMoreBooks = useCallback(
    () => setPage((page) => page + 1),
    [setPage]
  );

  return {
    data,
    books,
    isLoading,
    loadMoreBooks,
    addNewBook,
    hasNextPage: booksList.length > books.length,
  };
};

export { useBooks };
