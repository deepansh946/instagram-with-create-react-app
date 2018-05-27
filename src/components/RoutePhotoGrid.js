import React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";

class RoutePhotoGrid extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.refs.item.value);
  }

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RoutePhotoGrid);
