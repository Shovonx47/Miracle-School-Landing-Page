import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/mission-vision';

// Fetch mission vision data
export const fetchMissionVision = createAsyncThunk(
  'missionVision/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const missionVisionSlice = createSlice({
  name: 'missionVision',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionVision.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMissionVision.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMissionVision.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to fetch data';
      });
  },
});

export default missionVisionSlice.reducer; 