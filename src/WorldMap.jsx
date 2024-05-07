import React, { useState } from 'react';
import { fetchDataForCountry } from './animalSlice';

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
    fetchDataForCountry(countryName)
      .then((data) => {
        console.log('Data for', countryName, ':', data);
        // Handle fetched data
      })
      .catch((error) => {
        console.error('Error fetching data for', countryName, ':', error);
      });
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <svg width="100%" height="auto" viewBox="0 0 1000 500">
        {/* Add SVG path elements for each country */}
        <path
          d="M150 100 L200 150 L200 200 L100 300 Z"
          fill={selectedCountry === 'CountryA' ? '#F53' : '#D6D6DA'}
          onClick={() => handleCountryClick('CountryA')}
          style={{ cursor: 'pointer', stroke: '#fff', strokeWidth: 0.5 }}
        />
        <path
          d="M400 100 L450 150 L450 200 L350 300 Z"
          fill={selectedCountry === 'CountryB' ? '#F53' : '#D6D6DA'}
          onClick={() => handleCountryClick('CountryB')}
          style={{ cursor: 'pointer', stroke: '#fff', strokeWidth: 0.5 }}
        />
        {/* Add more paths for other countries */}
      </svg>
      {selectedCountry && <p>Selected country: {selectedCountry}</p>}
    </div>
  );
};

export default WorldMap;


