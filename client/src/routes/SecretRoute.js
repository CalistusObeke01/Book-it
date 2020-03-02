import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export class SecretRoute extends Component {
  static contextType = AuthContext;
  render() {
    const { component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          this.context.isAuthenticated && this.context.user.admin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  }
}
