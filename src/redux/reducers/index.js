import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
  data: dataSlice,
});

export default rootReducer;
