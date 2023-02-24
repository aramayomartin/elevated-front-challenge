import { useQuery } from "react-query";
import Client from "http/client";

const useBooks = () => {
  const books = useQuery("books", Client.getBooks, {staleTime:Infinity});
  return books;
};

export default useBooks;

