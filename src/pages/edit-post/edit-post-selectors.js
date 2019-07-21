import {createSelector} from "reselect";
import {PostSelectors} from "Modules/posts";

const getPostId = (state, props) => props.match.params.id;

export const getPost = createSelector(
    [PostSelectors.getPosts, getPostId],
    (posts, id) => (posts[id] && ({...posts[id], tags: posts[id].tags.join(",")}))
);
