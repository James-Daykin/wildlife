import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataForCategory } from "./movieSlice"; // Adjust the path as needed

const categories = [
  { name: "Comedy" },
  { name: "Action" },
  { name: "Romance" },
];

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFetchData = () => {
    if (selectedCategory) {
      dispatch(fetchDataForCategory(selectedCategory));
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
      <h2 style={{ margin: "0px 10px 0px 0px" }}>Select a Category</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={handleFetchData} disabled={!selectedCategory}>
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default Body;
