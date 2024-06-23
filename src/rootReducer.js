import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "./movieSlice"; // Import the animalsReducer

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
