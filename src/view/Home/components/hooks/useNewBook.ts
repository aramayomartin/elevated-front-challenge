import { useMutation } from "react-query";
import Client from "http/client";

const useNewBook = () => {
  return useMutation("newBook", (body: any) => Client.createBook(body));
};

export default useNewBook;
