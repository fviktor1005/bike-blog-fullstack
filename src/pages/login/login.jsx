import React from "react";
import Container from "Components/container";
import { InputField } from "Components/inputs";

import "./login.css";

const Login = ({ handleSubmit }) => (
  <Container>
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <InputField name="login" label="Username" />
      <InputField name="password" label="Password" type="password" />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  </Container>
);

export default Login;
