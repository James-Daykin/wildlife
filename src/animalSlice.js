import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define your async thunk function
export const fetchDataForCountry = createAsyncThunk(
  "animals/fetchDataForCountry",
  async (countryName, thunkAPI) => {
    try {
      const response = await fetch(
        `https://intlayer-39msq5cfs-james-daykins-projects.vercel.app/endangered/${countryName}`
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
  async (animalName, thunkAPI) => {
    try {
      const response = await fetch(
        `https://swe-endangered-animals.appspot.com/single_animal_data?animal_name=${animalName}`
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
        // Assuming your animal data is stored differently
        state.animalData.push(action.payload);
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
