import React, { useState } from "react";
import { Button, Input, ModalBody } from "view/Home/components/styles";
import useEditBook from "./hooks/useEditBook";
interface ModalEditBookProps {
  close: () => void;
  book: any;
}
interface EditProps {
  id: any;
  body: any;
}
export default function ModalEditBook({ close, book }: ModalEditBookProps) {
  const [form, setForm] = useState({ title: "", author: "", price: 0 });
  const editBook = useEditBook();
  const update = (updateObject: EditProps) => {
    editBook.mutate(updateObject, {
      onSuccess: () => {
        console.log("Editado!");
      },
    });
    close();
    setForm({ title: "", author: "", price: 0 });
  };
  const onChange = (name: string, value: any) => {
    console.log("entré");
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <ModalBody>
      <h2>MODAL PARA EDITAR LIBRO</h2>
      <div style={{ flexDirection: "column" }}>
        <Input
          value={form.title}
          onChange={(e) => {
            onChange("title", e.target.value);
          }}
          placeholder="Title"
        />
        <Input
          value={form.author}
          onChange={(e) => {
            onChange("author", e.target.value);
          }}
          placeholder="Author"
        />
        <Input
          value={form.price}
          type="number"
          onChange={(e) => {
            onChange("price", e.target.value);
          }}
          placeholder="Price"
        />
      </div>
      <Button
        onClick={() =>
          update({
            id: book.id,
            body: { title: book.title, author: book.author, price: book.price },
          })
        }
      >
        Save
      </Button>
      <Button onClick={close}>Cancel</Button>
    </ModalBody>
  );
}
