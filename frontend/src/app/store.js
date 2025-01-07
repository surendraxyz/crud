import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/auth/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
