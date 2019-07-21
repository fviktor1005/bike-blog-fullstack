import Axios from "axios";
import config from "Config";

const POSTS_SERVICE = {
  getList: (from, to) => Axios.get(config.api + `/posts/${from}/${to}`),
  create: values =>
    Axios.post(config.api + "/posts", values, { withCredentials: true }),
  getTags: () => Axios.get(config.api + "/posts/tags"),
  getPost: id => Axios.get(config.api + `/posts/${id}`),
  updatePost: (id, values) => Axios.put(config.api + `/posts/${id}`, values, { withCredentials: true })
};

export { POSTS_SERVICE };
