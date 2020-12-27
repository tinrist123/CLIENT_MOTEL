import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  filters: {
    util_list: [],
    sex_allowed: "",
    category_list: [],
  },
};

export const FilterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    utilityAdded: (state, action) => {
      state.filters.util_list.push(action.payload);
    },
    motelCategoryAdded: (state, action) => {
      state.filters.category_list.push(action.payload);
    },
    sex_allowedAdded: (state, action) => {
      state.filters.sex_allowed = action.payload;
    },
    utilityRemoved: (state, action) => {
      return {
        ...state.filters,
        util_list: state.filters.util_list.filter(
          (util) => util.type !== action.payload.type
        ),
      };
    },
    motelCategoryRemoved: (state, action) => {
      state.filters.category_list.push(action.payload);
    },
    sex_allowedRemoved: (state, action) => {
      state.filters.sex_allowed = action.payload;
    },
  },
});

export const {
  utilityAdded,
  motelCategoryAdded,
  sex_allowedAdded,
  utilityRemoved,
  motelCategoryRemoved,
  sex_allowedRemoved,
} = FilterSlice.actions;

export default FilterSlice.reducer;
