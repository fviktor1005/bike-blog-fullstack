import React, { Component } from "react";
import { Form as FinalForm } from "react-final-form";

import { AUTH_SERVICE } from "Modules/auth";
import Registration from "./registration";

export default class RegistrationController extends Component {
  onSubmit = ({ password1, ...values }) => {
    return AUTH_SERVICE.registrate(values)
      .then(() => this.props.history.push(`/login`))
      .catch(error => error.response.data);
  };

  validate = values => {
    const errors = {};
    if (values.password !== values.password1) {
      errors.password1 = "Wrong password confirm!";
    }
    return Object.keys(errors) && errors;
  };

  render() {
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={props => <Registration {...props} />}
      />
    );
  }
}
