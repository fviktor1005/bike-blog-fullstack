import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { POSTS_ACTIONS } from "Modules/posts";
import Categories from "./categories";

class CategoriesController extends PureComponent {
  componentDidMount() {
    this.props.getTags();
  }

  render() {
    return <Categories {...this.props} />;
  }
}

export default connect(
  state => ({ tags: state.db.tags }),
  { getTags: POSTS_ACTIONS.getTags }
)(CategoriesController);
