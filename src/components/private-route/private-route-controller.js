import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PrivateRoute from "./private-route";

class PrivateRouteController extends PureComponent {
  render() {
    return <PrivateRoute {...this.props} />;
  }
}

export default connect(state => ({ login: state.auth.login }))(
  PrivateRouteController
);
