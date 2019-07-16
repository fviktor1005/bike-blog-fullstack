import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Form as FinalForm } from "react-final-form";
import PropTypes from "prop-types";
import { AUTH_ACTIONS } from "Modules/auth";
import Login from "./login";

class LoginContainer extends PureComponent {
  onSubmit = values => {
    return this.props
      .login(values)
      .then(() => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from);
      })
      .catch(error => error.response.data);
  };

  validate = values => {
    const errors = {};
    if (!values.login) {
      errors.login = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return Object.keys(errors) && errors;
  };

  render() {
    return (
      <FinalForm
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={props => <Login {...props} />}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func
};

export default connect(
  null,
  { login: AUTH_ACTIONS.login }
)(LoginContainer);
