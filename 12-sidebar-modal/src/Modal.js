import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const data = useGlobalContext();
  // console.log(data);
  return (
    <div
      className={`modal-overlay ${data.isModalOpen && "show-modal"}`}
      onClick={(e) => {
        if (e.target.classList[0] === "modal-overlay") {
          data.closeModal();
        }
        // console.log(e.target.classList[0]);
      }}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => data.closeModal()}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
