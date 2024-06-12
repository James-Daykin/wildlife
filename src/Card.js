import React from "react";
import "./App.css";

const AnimalCard = ({
  name,
  image,
  endangeredStatus,
  continent,
  onClick,
  onClickFunction,
}) => {
  return (
    <div onClick={() => onClickFunction()} className="animal-card">
      <h2>{name}</h2>
      <img src={image} width={200} alt={`${name}`} className="animal-image" />
      <p>Status: {endangeredStatus}</p>
      <p>Continent: {continent}</p>
    </div>
  );
};

export default AnimalCard;
