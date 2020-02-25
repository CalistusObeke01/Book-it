import React, { Component } from "react";
import Button from "./Button";

// function SignUp()\
class SignUp extends Component {
  state = {
    company: "",
    name: "",
    email: "",
    password: ""
  };

  signUp = e => {
    console.log(e);
    e.preventDefault();
    var { company, name, email, password } = this.state;

    var signup = {
      company,
      name,
      email,
      password
    };
    console.log({ signup });
  };

  login = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const login = {
      email,
      password
    };

    console.log({ login });
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <section className="signUp-section" id="sign-up">
          <div className="col-md-5">
            <p className="signUp-heading lead">
              Ready to create your <b>account ? Sign Up</b>
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
                  onChange={() => this.inputChange}
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
                  onChange={() => this.inputChange}
                  required
                />
              </div>
              <div className="form-group form-check">
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
              </div>
              <Button>Sign in</Button>
            </form>
          </div>
        </section>
        <p className="lead text-center  trusted-brands">
          Trusted by leading Brands
        </p>
      </>
    );
  }
}

export default SignUp;
