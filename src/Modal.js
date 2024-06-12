import React from "react";
import "./App.css";

const Modal = ({ name, image, description, onClickFunction, isOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <dialog open={isOpen}>
        <h2>{name}</h2>
        <img src={image} width={200} alt={`${name}`} className="animal-image" />
        <p>{description}</p>
        <button onClick={() => onClickFunction()}>Close</button>
      </dialog>
    </div>
  );
};

export default Modal;
