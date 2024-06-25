import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataForCategory, fetchDataForCountry } from "./movieSlice";

const genres = [{ name: "Comedy" }, { name: "Action" }, { name: "Romance" }];

const Body = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const dispatch = useDispatch();

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleFetchData = () => {
    if (selectedGenre) {
      dispatch(fetchDataForCategory(selectedGenre));
    }
  };

  return (
    <div className="genre-selector">
      <h2 style={{ color: "white" }}>Select a Genre</h2>
      <div>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Select a genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <button onClick={handleFetchData} disabled={!selectedGenre}>
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default Body;
