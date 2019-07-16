import { ACTION_TYPES } from "./posts-actions";

const initialState = {
  authors: {},
  posts: {},
  pages: {},
  count: 0,
  tags: []
};

export const postsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTION_TYPES.savePosts:
      return {
        ...state,
        authors: {
          ...state.authors,
          ...payload.posts.reduce((acc, item) => {
            acc[(item.author[0] || {})._id] = { ...item.author[0] };
            return acc;
          }, {})
        },
        pages: {
          ...state.pages,
          [payload.pageNumber]: [...payload.posts.map(item => item._id)]
        },
        posts: {
          ...state.posts,
          ...payload.posts.reduce((acc, item) => {
            acc[item._id] = { ...item, author: (item.author[0] || {})._id };
            return acc;
          }, {})
        },
        count: payload.count
      };
    case ACTION_TYPES.saveTags:
      return {
        ...state,
        tags: payload
      };
    default:
      return state;
  }
};
