import React from "react";
import { Button, Form } from "reactstrap";
import PropTypes from "prop-types";
import { InputField } from "Components/inputs";
import Container from "Components/container";

const Registration = ({ handleSubmit }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <InputField
        name="login"
        placeholder="Input your login"
        label="Login"
        required
      />
      <InputField name="email" placeholder="@" label="Email" type="email" />
      <InputField name="password" label="Password" type="password" required />
      <InputField name="password1" label="Confirm password" type="password" />
      <InputField
        name="about"
        placeholder="Several words about you"
        label="About me"
        type="textarea"
      />

      <Button>Let's go!</Button>
    </Form>
  </Container>
);

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Registration;
