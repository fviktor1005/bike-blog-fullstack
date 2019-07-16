import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      login === null ? (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PrivateRoute;
