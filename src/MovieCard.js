import React from "react";
import "./App.css";

const MovieCard = ({ name, image, genre, onClickFunction }) => {
  return (
    <div onClick={() => onClickFunction()} className="movie-card">
      <h2>{name}</h2>
      <img src={image} width={200} alt={`${name}`} className="movie-image" />
      <p>Genre: {genre}</p>
    </div>
  );
};

export default MovieCard;
