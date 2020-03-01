import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
    user: "",
    setUser: newUser => this.setState({ user: newUser }),
    toggleAuth: () =>
      this.setState({ isAuthenticated: !this.state.isAuthenticated })
  };

  getUser = () => {
    const uk = JSON.parse(sessionStorage.getItem("mx"));
    console.log(uk);
    console.log(uk != null || undefined);
    if (uk !== null || undefined) {
      fetch(`/api/users/${uk}`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          if (data) {
            this.state.setUser(data.body);
            this.state.toggleAuth();
          }
        })
        .catch(error => console.log(error));
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;