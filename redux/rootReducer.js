// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";

import triggerSlice from "./slices/triggerSlice";

const rootReducer = combineReducers({
  trigger: triggerSlice,
});

export default rootReducer;
