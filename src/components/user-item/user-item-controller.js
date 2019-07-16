import React, { PureComponent, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AUTH_ACTIONS } from "Modules/auth";
import UserItem from "./user-item";

class UserItemController extends PureComponent {
  componentDidMount() {
    this.props.checkLogin();
  }

  goToProfile = () => this.props.history.push("/profile");

  render() {
    return this.props.login ? (
      <UserItem {...this.props} goToProfile={this.goToProfile} />
    ) : (
      <Fragment>
        <NavLink
          activeClassName="nav-item active"
          className="nav-link"
          to="/registration"
        >
          Registration
        </NavLink>
        <NavLink
          activeClassName="nav-item active"
          className="nav-link"
          to="/login"
        >
          Login
        </NavLink>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    state => ({ login: state.auth.login }),
    {
      checkLogin: AUTH_ACTIONS.checkLogin,
      logout: AUTH_ACTIONS.logout
    }
  )(UserItemController)
);
