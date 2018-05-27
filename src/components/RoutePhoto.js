import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class RoutePhoto extends React.Component {
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.match.params.postId
    );

    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
        <Comments {...this.props} postId={i} />
      </div>
    );
  }
}

export default RoutePhoto;
