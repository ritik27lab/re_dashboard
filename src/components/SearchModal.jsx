import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

export default function SearchModal({ isOpen, setIsOpen }) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div></div>
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>Tab navigation</button>
          <button>Stays</button>
          <button>Inside</button>
          <button>The modal</button>
        </form>
      </Modal>
    </div>
  );
}
