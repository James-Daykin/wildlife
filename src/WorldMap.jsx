import React, { useState } from "react";
import { useDispatch } from "react-redux";

import animalReducer from "./animalSlice";

import { fetchDataForCountry } from "./animalSlice";

const countries = [{ name: "Africa" }, { name: "Asia" }, { name: "America" }];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleFetchData = () => {
    if (selectedCountry) {
      dispatch(fetchDataForCountry(selectedCountry));
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        gap: "20px",
        backgroundColor: "green",
        borderRadius: "20px",
        padding: "20px",
        paddingTop: "-20px",
      }}
    >
      <h2 style={{ margin: "10px" }}>Select a Country</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <button onClick={handleFetchData} disabled={!selectedCountry}>
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default WorldMap;
