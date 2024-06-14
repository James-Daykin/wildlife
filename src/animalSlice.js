import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define your async thunk function
export const fetchDataForCountry = createAsyncThunk(
  "animals/fetchDataForCountry",
  async (countryName, thunkAPI) => {
    try {
      const response = await fetch(
        `https://intlayer-m8ehrb3ty-james-daykins-projects.vercel.app/endangered/${countryName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAnimalData = createAsyncThunk(
  "animals/fetchAnimalData",
  async (animalID, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3001/species-descriptions/${animalID}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch animal data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const animalSlice = createSlice({
  name: "animals",
  initialState: {
    animalData: [],
    selectedAnimal: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataForCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataForCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.animalData = action.payload;
      })
      .addCase(fetchDataForCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAnimalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimalData.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAnimal = action.payload;
      })
      .addCase(fetchAnimalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: animalsReducer } = animalSlice; // Exporting the reducer
export const { actions } = animalSlice; // Exporting the actions

// Export other actions or selectors if needed
