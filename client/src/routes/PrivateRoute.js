import React, { Component} from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export class PrivateRoute extends Component {
         static contextType = AuthContext;
         render() {
           const { component: Component, ...props } = this.props;

           return (
             <Route
               {...props}
               render={props =>
                 this.context.isAuthenticated ? (
                   <Component {...props} />
                 ) : (
                   <Redirect to="/" />
                 )
               }
             />
           );
         }
       }

// export default PrivateRoute;
