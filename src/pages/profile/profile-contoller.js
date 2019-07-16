import React, { Component } from "react";
import { Form as FinalForm } from "react-final-form";

import Profile from "./profile";
import { AUTH_SERVICE } from "Modules/auth";

class ProfileController extends Component {
  state = {
    initialValues: {}
  };
  componentDidMount() {
    AUTH_SERVICE.getProfile().then(resp =>
      this.setState({ initialValues: { ...resp.data, password: undefined } })
    );
  }

  onSubmit = ({ password1, ...values }) => {
    return AUTH_SERVICE.updateProfile(values)
      .then(resp => alert(resp.body))
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
        initialValues={this.state.initialValues}
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={props => <Profile {...props} />}
      />
    );
  }
}

export default ProfileController;
