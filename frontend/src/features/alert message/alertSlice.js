import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    status: "",
    open: false,
    message: "",
  },
  reducers: {
    setAlertMessage: (state, action) => {
      state.status = action.payload.status;
      state.open = action.payload.open;
      state.message = action.payload.message;
    },
  },
});

export const { setAlertMessage } = alertSlice.actions;
