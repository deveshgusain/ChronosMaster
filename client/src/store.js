import { configureStore } from "@reduxjs/toolkit";

// import houseReducer from "../features/house/houseSlice";
import taskReducer from "../features/task/taskSlice";
import statusReducer from "../features/status/statusSlice"

export default configureStore({
  reducer: {
    // houses: houseReducer,
    tasks: taskReducer,
    status: statusReducer
  },
});
