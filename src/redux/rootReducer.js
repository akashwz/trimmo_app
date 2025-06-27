// import { combineReducers } from "redux";
const { combineReducers } = require("@reduxjs/toolkit");
import { authReducer } from "./Reducer/auth.reducer";
import { errorReducer } from "./Reducer/error.reducer";
import { appreanceReducer } from "./Reducer/appearance.reducer";
import analyticsSlice from "./slices/analyticsSlice";
import apperanceSlice from "./slices/apperanceSlice";
import authSlice from "./slices/authSlice";
import {
  analyticsIdReducer,
  analyticsReducer,
  analyticsTotalClickReducer,
  analyticsTotalReducer,
} from "./Reducer/analytics.reducer";
const rootReducer = combineReducers({
  // authReducer,
  errorReducer,
  // appreanceReducer,
  // analyticsReducer,
  // analyticsTotalReducer,
  // analyticsTotalClickReducer,
  // analyticsIdReducer,
  analyticsSlice,
  apperanceSlice,
  authSlice,
});

export default rootReducer;
