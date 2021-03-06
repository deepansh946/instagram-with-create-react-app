import React from "react";
// import CSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment as actionIncrement } from "../actions/index";

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure key={i} className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/photos/${post.code}`}>
            <img
              className="grid-photo"
              src={post.display_src}
              alt={post.caption}
            />
          </Link>

          {/* <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup> */}
        </div>

        <figcaption>
          <p>{post.caption}</p>

          <div className="control-buttons">
            <button
              onClick={this.props.actionIncrement.bind(null, i)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>

            <Link to={`/photos/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" />{" "}
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    actionIncrement
  };

  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Photo);
