import React from "react";
import PropTypes from "prop-types";
import Container from "Components/container";
import { InputField } from "Components/inputs";

NewPost.propTypes = {};

function NewPost({ handleSubmit }) {
  return (
    <Container>
      <form onSubmit={handleSubmit} className="my-5">
        <InputField name="title" required label="Title" />
        <InputField name="text" required type="textarea" label="Text" />
        <InputField name="tags" label="Tags" />
        <InputField name="image" label="Image" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
}

NewPost.propTypes = {
  handleSubmit: PropTypes.func,
};

export default NewPost;
