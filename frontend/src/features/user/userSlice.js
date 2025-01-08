import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, thunkAPI) => {
    const runApiFunction = async () => {
      return await axios.post(
        `${process.env.REACT_APP_API_URL}/api/create-user/`,
        data
      );
    };

    try {
      const response = await runApiFunction();
      if (response.status === 201) {
        return response;
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const userGet = createAsyncThunk("user/userGet", async (thunkAPI) => {
  const runApiFunction = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/get-users/`);
  };

  try {
    const response = await runApiFunction();
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    usersData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success";
        state.usersData.users = [
          ...state.usersData.users,
          action.payload.data.users,
        ];
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
        console.log(action.error.message);
      })

      .addCase(userGet.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userGet.fulfilled, (state, action) => {
        state.status = "success";
        state.usersData = action.payload.data;
        state.error = null;
      })
      .addCase(userGet.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
        console.log(action.error.message);
      });
  },
});
