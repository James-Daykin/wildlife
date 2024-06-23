import "./App.css";
import Body from "./Body";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieData } from "./movieSlice"; // Update to your movie slice
import Modal from "./Modal";
import MovieCarousel from "./MovieCarousel"; // Adjust the path as needed

const App = () => {
  const movies = useSelector((s) => s?.movies?.movieData);
  const selectedMovieData = useSelector((s) => s?.movies?.selectedMovie);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  console.log(movies);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        name={selectedMovieData?.name}
        description={selectedMovieData?.description}
        image={selectedMovieData?.image}
        onClickFunction={() => setIsModalOpen(false)}
      />
      <div className="top">
        <h2 className="titletext">Popular Movies</h2>
        <Body />
      </div>
      {movies && movies.length > 0 && (
        <div className="movie-cards-container">
          <MovieCarousel
            movies={movies}
            dispatch={dispatch}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
      {movies.length === 0 && (
        <div className="top">
          <div className="additional-info">
            Select a category to pull popular movies data from my Express API
          </div>
        </div>
      )}
    </>
  );
};

export default App;
