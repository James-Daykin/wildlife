import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// In the file where you're using the reducer
import animalReducer from './animalSlice'; // Simplified import

import { fetchDataForCountry } from './animalSlice';

const countries = [
  {name: "Azerbaijan"}
];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
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
    <div>
      <h2>Select a Country</h2>
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
  );
};

export default WorldMap;

