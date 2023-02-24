import React, { useState } from "react";
import { Button, Input, ModalBody } from "view/Home/components/styles";
import useNewBook from "./hooks/useNewBook";
interface ModalAddBookProps {
  close: () => void;
}
export default function ModalAddBook({ close }: ModalAddBookProps) {
  const [form, setForm] = useState({ title: "", author: "", price: 0 });
  const addBook = useNewBook();
  const closeModal = () => {
    addBook.mutate(form, {
      onSuccess: () => {
        console.log("Agregado!");
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
      <h2>MODAL PARA AGREGAR LIBROS</h2>
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
      <Button onClick={closeModal}>Guardar</Button>
      <Button onClick={close}>Cancel</Button>
    </ModalBody>
  );
}
