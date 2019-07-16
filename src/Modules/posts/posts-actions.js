import config from "Config";
import POST_SELECTORS from "./posts-selectors";
import { POSTS_SERVICE } from "./posts-service";

export const ACTION_TYPES = {
  savePosts: "savePosts",
  saveTags: "saveTags"
};

const loadPostsByPage = pageNumber => async dispatch => {
  const from = +pageNumber * config.pageSize;
  const to = from + config.pageSize;

  const response = await POSTS_SERVICE.getList(from, to);
  const { posts, count } = response.data;

  dispatch({
    type: ACTION_TYPES.savePosts,
    payload: { posts, count, pageNumber }
  });
};

const getTags = () => dispatch => {
  POSTS_SERVICE.getTags().then(response =>
    dispatch({ type: ACTION_TYPES.saveTags, payload: response.data })
  );
};

const getPost = id => (dispatch, getState) => {
  const post = POST_SELECTORS.getPosts(getState())[id];
  if (post) return;
  POSTS_SERVICE.getPost(id).then(response => {
    dispatch({
      type: ACTION_TYPES.savePosts,
      payload: { posts: response.data }
    });
  });
};

export const POSTS_ACTIONS = {
  loadPostsByPage,
  getTags,
  getPost
};
