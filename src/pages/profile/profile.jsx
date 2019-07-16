import React from "react";
import { Button, Form } from "reactstrap";
import PropTypes from "prop-types";
import { InputField } from "Components/inputs";
import Container from "Components/container";

const Profile = ({ handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit} className="my-5">
      <InputField name="login" label="Login" readOnly />
      <InputField name="email" placeholder="@" label="Email" type="email" />
      <InputField name="password" label="Password" type="password" />
      <InputField name="password1" label="Confirm password" type="password" />
      <InputField
        name="about"
        placeholder="Several words about you"
        label="About me"
        type="textarea"
      />

      <Button>Update account</Button>
    </Form>
  </Container>
);

Profile.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Profile;
