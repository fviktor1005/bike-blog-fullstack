import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Post from "./post";
import { POSTS_ACTIONS } from "Modules/posts";
import { getPost, getAuthor } from "./post-selectors";

class PostController extends PureComponent {
  componentDidMount() {
    const { post } = this.props.match.params;
    this.props.getPost(post);
  }

  render() {
    return <Post {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  post: getPost,
  author: getAuthor
});

export default connect(
  mapStateToProps,
  { getPost: POSTS_ACTIONS.getPost }
)(PostController);
