import React, { PureComponent } from "react";
import { Form as FinalForm } from "react-final-form";
import NewPost from "./new-post";
import { POSTS_SERVICE } from "Modules/posts";

class NewPostController extends PureComponent {
  onSubmit = values => {
    POSTS_SERVICE.create({ ...values, tags: (values.tags || '').split(",") }).then(() =>
      this.props.history.push("/")
    );
  };

  validate = () => {};

  render() {
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={props => <NewPost {...props} />}
      />
    );
  }
}

export default NewPostController;
