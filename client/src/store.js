import { configureStore } from "@reduxjs/toolkit";

import houseReducer from "../features/house/houseSlice";

export default configureStore({
  reducer: {
    houses: houseReducer,
  },
});
