/**
 * Store configuration
 *
 * @format
 */
/* eslint import/no-extraneous-dependencies: "off" */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

import posts from "../data/posts";
import comments from "../data/comments";

const middleware = [
  /* thunk */
];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and
  // other options if needed
});

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const initialState = {
  posts,
  comments
};

const store = createStore(reducers, initialState, enhancer);

if (module.hot) {
  /* eslint-disable */
  module.hot.accept("../reducers", function() {
    store.replaceReducer(require("../reducers").default);
  });
  /* eslint-enable */
}

export default store;
