import { createSelector } from "reselect";
import { PostSelectors } from "Modules/posts";

const getPostId = (state, props) => props.match.params.post;

export const getPost = createSelector(
  [PostSelectors.getPosts, getPostId],
  (posts, id) => posts[id]
);

export const getAuthor = createSelector(
  [PostSelectors.getAuthors, getPost],
  (authors, post = {}) => authors[post.author]
);
