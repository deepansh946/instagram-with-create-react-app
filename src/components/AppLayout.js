import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { connect } from "react-redux";

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

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
