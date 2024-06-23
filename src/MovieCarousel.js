import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard"; // Adjust the path as needed
import { fetchMovieData } from "./movieSlice";

const MovieCarousel = ({ movies, dispatch, setIsModalOpen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
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
