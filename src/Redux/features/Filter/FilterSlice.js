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
      state.filters.sex_allowed = action.payload.type;
    },
    utilityRemoved: (state, action) => {
      const { type } = action.payload;
      const { util_list } = state.filters;
      const index = util_list.findIndex((item) => type === item.type);
      util_list.splice(index, 1);
    },
    motelCategoryRemoved: (state, action) => {
      const { type } = action.payload;
      const { category_list } = state.filters;
      const index = category_list.findIndex((item) => type === item.type);
      category_list.splice(index, 1);
    },
    sex_allowedRemoved: (state, action) => {
      const { type } = action.payload;
      state.filters.sex_amllowed = type;
    },
    reset_filter: (state, action) => {
      state.filters = {
        ...state,
        matchData: {
          disabled: {
            $ne: true,
          },
        },
        room_location: "HCM",
        current_page: 0,
        page_number: 7,
        filters: {},
        place_detail: {
          district_code: "770",
        },
        util_list: [],
        sex_allowed: "",
        category_list: [],
      };
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
  reset_filter,
} = FilterSlice.actions;

export default FilterSlice.reducer;
