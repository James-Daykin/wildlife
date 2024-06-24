import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define your async thunk function
export const fetchDataForCategory = createAsyncThunk(
  "movies/fetchDataForCategory",
  async (categoryName, thunkAPI) => {
    try {
      const response = await fetch(
        `https://intlayer-ewb4.vercel.app//movies/${categoryName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovieData = createAsyncThunk(
  "movies/fetchMovieData",
  async (movieID, thunkAPI) => {
    try {
      const response = await fetch(
        `https://your-api-url.com/movie-details/${movieID}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieData: [],
    selectedMovie: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataForCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataForCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload;
      })
      .addCase(fetchDataForCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: moviesReducer } = movieSlice; // Exporting the reducer
export const { actions } = movieSlice; // Exporting the actions

// Export other actions or selectors if needed
