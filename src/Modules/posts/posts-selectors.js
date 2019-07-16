const getPosts = state => state.db.posts;

const getPages = state => state.db.pages;

const getAuthors = state => state.db.authors;

export default {
  getAuthors,
  getPages,
  getPosts
};
