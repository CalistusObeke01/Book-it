import React, { Component } from "react";
import Button from "./Button";
import { AuthContext } from "../components/AuthContext";
import { Redirect } from "react-router-dom";

// function SignUp()\
class SignUp extends Component {
  static contextType = AuthContext;
  state = {
    company: "",
    name: "",
    email: "",
    password: "",
    loggedIn: this.context.isAuthenticated
  };

  signUp = e => {
    e.preventDefault();
    try {
      var { company, name, email, password } = this.state;
      var admin = true;
      fetch("/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, name, email, password, admin })
      })
        .then(response => {
          if (response.status === 201) {
            alert("signup Successful. Please login to continue");
            this.setState({ company: "", name: "", email: "", password: "" });
          } else if (response.status === 403) {
            console.log(response);
            alert(
              "An account already exists with this email address. Log in to continue"
            );
            this.setState({ company: "", name: "", email: "", password: "" });
          } else if (response.status === 401) {
            console.log(response);
            alert(
              "This Organization already exists, get your organization's admin to add you or log in to continue"
            );
            this.setState({ company: "", name: "", email: "", password: "" });
          } else {
            alert("network error, please try again in a bit");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      alert("Signup failed. Please try again");
      console.log(error);
    }
  };

  login = e => {
    e.preventDefault();
    const setUser = this.context.setUser;
    const toggleAuth = this.context.toggleAuth;
    try {
      const { email, password } = this.state;
      fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
        .then(async response => {
          if (response.status === 200) {
            var data = await response.json();
            const { name, company, admin, id, userKey } = data.body;
            const user = { name, company, admin, id };
            console.log(user);
            sessionStorage.setItem("mx", JSON.stringify(userKey));
            toggleAuth();
            setUser(user);
            this.setState({ company: "", name: "", email: "", password: "" });
          } else if (response.status === 401) {
            alert("incorrect email or password, please check and try again");
          } else {
            alert("Network error, please try again in a bit.");
          }
        })
        // .then(data => {
        //   console.log(data);
        //   if (data !== null || undefined) {
        //   }
        // })
        .catch(err => console.log(err));
    } catch (error) {
      alert("Error! please try again");
      console.log(error);
    }
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.context.isAuthenticated === false) {
      return (
        <>
          <section className="signUp-section" id="sign-up">
            <div className="col-md-5">
              <p className="signUp-heading lead">
                Ready to create your <b>account? Sign Up</b>
              </p>
              <p className="signUp-subHeading">
                Welcome to <span>Book!T</span>
              </p>

              <form onSubmit={this.signUp}>
                <div className="form-group">
                  <label htmlFor="InputCompany">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    className="form-control"
                    id="InputCompany"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputFullname">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="InputFullname"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signInPassword">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="signUpPassword"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                  />
                  <label className="form-check-label" htmlFor="check" required>
                    I have read and agreed to all{" "}
                    <span style={{ color: "var(--primaryColor)" }}>
                      terms and condition{" "}
                    </span>
                    and{" "}
                    <span style={{ color: "var(--primaryColor)" }}>
                      privacy policy
                    </span>
                  </label>
                </div>
                <Button type="submit">Create Account</Button>
              </form>
            </div>
            <div className="col-md-2 form-split"></div>

            <div className="col-md-5">
              <p className="signIn-heading lead">
                Already have an account, <b>Log In</b>
              </p>
              <p className="signIn-subHeading">Sign in</p>

              <form onSubmit={this.login}>
                <div className="form-group">
                  <label htmlFor="signInEmail">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="signInEmail"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signInPassword">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="signInPassword"
                    onChange={this.inputChange}
                    required
                  />
                </div>
                {/* <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkRemember"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkRemember"
                    required
                  >
                    Remember me
                  </label>
                  <a href="#forgetPassword" className="forgetPassword">
                    Forget password ?
                  </a>
                </div> */}
                <Button>Sign in</Button>
              </form>
            </div>
          </section>
          <p className="lead text-center  trusted-brands">
            Trusted by leading Brands
          </p>
        </>
      );
    } else {
      return <Redirect to="/confrence" />;
    }
  }
}

export default SignUp;
