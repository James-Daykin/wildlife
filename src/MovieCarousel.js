import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard"; // Adjust the path as needed
import { fetchMovieData } from "./movieSlice";

const MovieCarousel = ({ movies, dispatch, settings, setIsModalOpen }) => {
  return (
    <Slider {...settings}>
      {movies?.map((movie, index) => (
        <div key={index}>
          <MovieCard
            name={movie.name}
            image={movie.image}
            genre={movie.genre}
            onClickFunction={() => {
              dispatch(fetchMovieData(movie.id));
              setIsModalOpen(true);
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default MovieCarousel;
