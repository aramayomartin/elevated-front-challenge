import React, { useState } from "react";
import Modal from "react-modal";
import ListBooks from "./components/ListBooks";
import ModalAddBook from "./components/ModalAddBook";
import NavBar from "./components/NavBar";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  Modal.setAppElement(document.getElementById('root')!);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px'
    },
  };

  return (
    <div style={{flexDirection:"column"}}>
     <NavBar openModal={openAddModal}/>
      <Modal
        isOpen={showAddModal}
        style={customStyles}
        contentLabel="newModal"
      >
      <ModalAddBook close={closeAddModal} />
      </Modal>
      <ListBooks/>
    </div>
  );
};

export default Home;
