import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import AppRoutes from "./AppRoutes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
