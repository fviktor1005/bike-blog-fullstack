import { createSelector } from "reselect";
import { PostSelectors } from "Modules/posts";

export const getPagePostIDs = (state, props) =>
  state.db.pages[props.match.params.page || 0];

export const getPagesCount = state => Math.ceil(state.db.count / 3) - 1;

export const getCurrentPosts = createSelector(
  [PostSelectors.getPosts, getPagePostIDs],
  (posts, Ids = []) => Ids.map(id => posts[id])
);
