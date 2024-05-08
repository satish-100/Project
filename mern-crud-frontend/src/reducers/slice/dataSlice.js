// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Define a thunk for fetching data asynchronously
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // Fetch your data here, for example using fetch or axios
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data;
});

// Create a slice for data management
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
