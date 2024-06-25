import React from "react";
import "./App.css";

const Modal = ({ name, trailer, description, onClickFunction, isOpen }) => {
  console.log(trailer, name);
  return (
    <div
      style={{
        display: `${isOpen ? "flex" : "none"}`,
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "80%",
        margin: "auto",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <dialog style={{ borderRadius: "20px" }} open={isOpen}>
        <h2>{name}</h2>
        <iframe
          width="560"
          height="315"
          src={trailer}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{description}</p>
        <button onClick={() => onClickFunction()}>Close</button>
      </dialog>
    </div>
  );
};

export default Modal;
