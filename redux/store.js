import { configureStore } from "@reduxjs/toolkit";
import darkOrLightModeSlice from "./features/darkOrLightMode/darkOrLightMode";
import loaderSlice from "./features/loader/loaderSlice";

export default configureStore({
  reducer: {
    mode: darkOrLightModeSlice,
    loader: loaderSlice,
  },
});
