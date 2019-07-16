import React, { PureComponent } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Main from "./main";
import { POSTS_ACTIONS, PostSelectors } from "Modules/posts";
import {
  getCurrentPosts,
  getPagesCount,
  getPagePostIDs
} from "./main-selectors";

class MainController extends PureComponent {
  componentDidMount() {
    const { page = 0 } = this.props.match.params;
    this.props.loadPostsByPage(page);
  }

  componentDidUpdate(prevProps) {
    const { page = 0 } = this.props.match.params;
    const prevPage = prevProps.match.params.page;
    if (page !== prevPage && !this.props.Ids) {
      this.props.loadPostsByPage(page);
    }
  }

  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = createStructuredSelector({
  Ids: getPagePostIDs,
  authors: PostSelectors.getAuthors,
  posts: getCurrentPosts,
  count: getPagesCount
});

export default connect(
  mapStateToProps,
  { loadPostsByPage: POSTS_ACTIONS.loadPostsByPage }
)(MainController);
