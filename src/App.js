import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import Body from "./Body";
import Modal from "./Modal";
import { fetchMovieData } from "./movieSlice";

const App = () => {
  const movies = useSelector((state) => state.movies.movieData);
  const selectedMovieData = useSelector((state) => state.movies.selectedMovie);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  console.log(selectedMovieData);
  return (
    <div className="app-container">
      <Modal
        isOpen={isModalOpen}
        name={selectedMovieData?.name}
        description={selectedMovieData?.description}
        trailer={selectedMovieData?.trailer}
        onClickFunction={() => setIsModalOpen(false)}
      />
      <div className="top">
        <h2 className="titletext">Movie Zone</h2>
      </div>
      <Body />
      {movies && movies.length > 0 ? (
        <div className="movie-cards-container">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              category={movie.category}
              onClickFunction={() => {
                dispatch(fetchMovieData(movie.id));
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="additional-info">
          Select a genre to pull movie data from my Express API.{" "}
          <a href={"https://github.com/James-Daykin/intlayer"}>
            Link to my Express API repo
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
