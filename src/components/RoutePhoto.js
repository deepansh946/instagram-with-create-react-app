import React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";
import Comments from "./Comments";

class RoutePhoto extends React.Component {
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.match.params.photoId
    );

    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
        <Comments {...this.props} postId={i} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RoutePhoto);
