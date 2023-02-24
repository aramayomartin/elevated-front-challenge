import { useMutation } from "react-query";
import Client from "http/client";

const useDeleteBook = () => {
  return useMutation("deleteBook", (id: any) => Client.deleteBook(id));
};

export default useDeleteBook;
