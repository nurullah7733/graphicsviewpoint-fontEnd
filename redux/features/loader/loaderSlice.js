import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: "hide",
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader(state) {
      state.loader = "";
    },
    hideLoader(state) {
      state.loader = "hide";
    },
  },
});

export const { hideLoader, showLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
