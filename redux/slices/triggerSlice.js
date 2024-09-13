import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const triggerSlice = createSlice({
  name: "trigger",
  initialState,
  reducers: {
    setTrigger: (state, action) => {
      return !state;
    },
  },
});

export const { setTrigger } = triggerSlice.actions;

export default triggerSlice.reducer;
