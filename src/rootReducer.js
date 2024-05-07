import { combineReducers } from '@reduxjs/toolkit';
import { animalsReducer } from './animalSlice'; // Import the animalsReducer

const rootReducer = combineReducers({
  animals: animalsReducer, // Use the animalsReducer under the 'animals' slice
  // Add other reducers if any
});

export default rootReducer;
