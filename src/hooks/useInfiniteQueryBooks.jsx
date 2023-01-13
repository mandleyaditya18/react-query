import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { books as booksList } from "../../db.json";
import axios from "axios";

const useInfiniteQueryBooks = () => {
  const fetchInfinteQueryBooksList = ({
    pageParam = 1,
    queryKey: [, limit],
  }) => {
    return axios
      .get(`http://localhost:4000/books?_limit=${limit}&_page=${pageParam}`)
      .then((result) => result.data);
  };

  const addNewBook = async (title, author) => {
    const result = await axios.post("http://localhost:4000/books", {
      title,
      author,
    });
    return result;
  };

  const recordsPerPage = 3;

  const {
    isLoading,
    isError,
    error,
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["fetchInfinteQueryBooksList", recordsPerPage],
    fetchInfinteQueryBooksList,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < booksList.length / recordsPerPage) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  const books = useMemo(() => {
    const booksList = [];
    if (data) {
      data?.pages.forEach((page) => {
        page?.forEach((book) => booksList.push(book));
      });
    }
    return booksList;
  });

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:4000/books/${bookId}`);
    refetch();
  };

  return {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    addNewBook,
    books,
    deleteBook,
  };
};

export { useInfiniteQueryBooks };
