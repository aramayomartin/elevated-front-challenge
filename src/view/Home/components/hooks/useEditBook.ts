import { useMutation } from "react-query";
import Client from "http/client";
interface EditProps {
  id: any;
  body: any;
}
const useEditBook = () => {
  return useMutation("editBook", ({ id, body }: EditProps) =>
    Client.editBook(id, body)
  );
};

export default useEditBook;
