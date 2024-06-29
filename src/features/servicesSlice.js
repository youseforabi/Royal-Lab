import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from './globals';

// Initial state
const initialState = {
  status: 'idle',
  message: '',
  errors: [],
  services: null,
  notes: {},
  page: 1,
  error: null,
};

// Async thunk for fetching services
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(API + `/api/services/get-all-services?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
      setPage: (state, action) => {
        state.page = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchServices.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchServices.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.message = action.payload.message;
          state.errors = action.payload.errors;
          state.services = action.payload.data[0]; // Access the inner array
          state.notes = action.payload.notes;
        })
        .addCase(fetchServices.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload || 'Failed to fetch services';
        });
    },
  });
// Export actions and reducer
export const { setPage } = servicesSlice.actions;
export default servicesSlice.reducer;
