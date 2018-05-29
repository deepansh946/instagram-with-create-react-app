import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";

// Combine all our reducers together
const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
