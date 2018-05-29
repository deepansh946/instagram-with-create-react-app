import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import RoutePhotoGrid from "./components/RoutePhotoGrid";
import RoutePhoto from "./components/RoutePhoto";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path="/" component={RoutePhotoGrid} />
          <Route exact path="/photos/:photoId" component={RoutePhoto} />

          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;
