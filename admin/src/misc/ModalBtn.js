import React from "react";

const ModalBtn = ({ id, closeModal }) => {
  return (
    <>
      {closeModal && (
        <button
          type="submit"
          className="btn btn-secondary btn-sm mt-5 float-right"
          onClick={closeModal}>
          Close
        </button>
      )}
      <button
        type="submit"
        className="btn btn-primary btn-sm mt-5 float-right mr-3">
        {!id ? "SAVE" : "UPDATE"}
      </button>
    </>
  );
};

export default ModalBtn;
