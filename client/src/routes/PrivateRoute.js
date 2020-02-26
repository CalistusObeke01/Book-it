import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';

export class PrivateRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          JSON.parse(sessionStorage.getItem("user")) ?
            <Component {...props} /> :
            <Redirect to='/' />
        )} 
      />
    )
  }
};

// export default PrivateRoute;
    
