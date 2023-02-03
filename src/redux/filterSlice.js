import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getSelectorFilter = (state) => state.filter.filter;
