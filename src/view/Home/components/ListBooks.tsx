import React, { useState } from "react";
import useBooks from "./hooks/useBooks";
import Modal from "react-modal";
import ModalEditBook from "../components/ModalEditBook";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

export default function ListBooks(): React.ReactElement {
  const books = useBooks();

  const [showEditModal, setShowEditModal] = useState(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  return (
    <div
      style={{
        marginTop: "15px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>⚜️ Available books: </h1>
      <hr />
      <ul>
        {books.data?.map((b: any) => (
          <div>
            <li onClick={openEditModal} style={{ cursor: "pointer" }}>
              🫵 Title: {b.title} - 👓 Author: {b.author} - 🤑 Price: ${b.price}
            </li>
            <br />
            <hr />
            <Modal
              isOpen={showEditModal}
              style={customStyles}
              contentLabel="editModal"
            >
              <ModalEditBook close={closeEditModal} book={b}/>
            </Modal>
          </div>
        ))}
      </ul>
    </div>
  );
}
