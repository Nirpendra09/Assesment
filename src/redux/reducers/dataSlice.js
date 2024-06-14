import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setApiData } = dataSlice.actions;
export default dataSlice.reducer;
