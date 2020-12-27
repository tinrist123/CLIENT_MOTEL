import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/Filter/FilterSlice";

export default configureStore({
  reducer: {
    filterSearch: filterReducer,
  },
});
