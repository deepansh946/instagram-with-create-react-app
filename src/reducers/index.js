import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";

// Combine all our reducers togeher
const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
