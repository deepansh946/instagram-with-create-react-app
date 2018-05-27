import React from "react";
import { Link } from "react-router-dom";

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
