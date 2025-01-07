import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userGet = createAsyncThunk("user/userGet", async () => {
  const runApiFunction = async () => {
    return await axios.get(`${process.env.REACT_APP_ACCESS_KEY}/api/get/`);
  };

  try {
    const response = runApiFunction();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userGet.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userGet.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
        state.error = null;
      })
      .addCase(userGet.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
        console.log(action.error.message);
      });
  },
});
