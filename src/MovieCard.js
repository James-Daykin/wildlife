import React from "react";
import "./App.css";

const MovieCard = ({
  name,
  image,
  rating,
  category,
  onClickFunction,
  onClickFunction2,
  isFavourites,
}) => {
  return (
    <div onClick={() => onClickFunction()} className="movie-card">
      <h2>{name}</h2>
      <img src={image} width={200} alt={`${name}`} className="movie-image" />
      <p>Genre: {category}</p>
      <p>Rating: {rating}</p>
      {isFavourites && (
        <button
          onClick={(event) => {
            event.stopPropagation();
            onClickFunction2();
          }}
        >
          Delete from Favourites
        </button>
      )}
    </div>
  );
};

export default MovieCard;
