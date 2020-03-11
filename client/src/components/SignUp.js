import React, { Component } from "react";
import Button from "./Button";
import { AuthContext } from "../components/AuthContext";
import { Redirect } from "react-router-dom";

// function SignUp()
let validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
class SignUp extends Component {
  static contextType = AuthContext;
  state = {
    company: null,
    name: null,
    email: null,
    password: null,
    ComfirmPassword: null,
    errors: {
      company: '',
      name: '',
      email: '',
      password: '',
      ComfirmPassword: '',
    }
  };

  signUp = e => {
    e.preventDefault();

    if (this.state.ConfirmPassword === this.state.password) {
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
    } else {
      alert("Confirm Password does not match Password");
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
            sessionStorage.setItem("mx", userKey);
            this.setState({ company: "", name: "", email: "", password: "" });
            setUser(user);
            toggleAuth();
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
    // this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
    const {name, value} = e.target
    let errors = this.state.errors;

    switch(name) {
      case 'company':
        errors.company = value.length < 5 ? 'Company Name must be at least 5 characters long.' : '';
        break;
      case 'name':
        errors.name = value.length < 6 ? 'Full Name must be at least 6 characters long.' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid' ;
        break;
      case 'password':
        errors.password = value.length < 8  ? 'Password must be at least 8 characters long.' : '';
        break
        default:
    }

    this.setState({
      errors, [name] : value}, () => {
        console.log(errors)
    })
  };

  render() {
    let errors = this.state.errors;
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

              <form onSubmit={this.signUp} noValidate>
                <div className="form-group">
                  <label htmlFor="InputCompany">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    className="form-control"
                    id="InputCompany"
                    // value={this.state.companyName}
                    onChange={this.inputChange}
                    noValidate
                  />
                  {errors.company.length > 0 && 
                  <span className="error">{errors.company}</span>}
                  {/* <small>Capitalization sensitive</small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="InputFullname">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="InputFullname"
                    // value={this.state.fullName}
                    onChange={this.inputChange}
                    noValidate
                  />
                  {errors.name.length > 0 && 
                  <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    // value={this.state.email}
                    onChange={this.inputChange}
                    noValidate
                  />
                  {errors.email.length > 0 && 
                  <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="signInPassword">Password</label>
                  <input
                    name="password"
                    type="password"
                    // value={this.state.password}
                    className="form-control"
                    id="signUpPassword"
                    onChange={this.inputChange}
                    noValidate
                  />
                  {errors.password.length > 0 && 
                  <span className="error">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <input
                    // value={this.state.ConfirmPassword}
                    name="ConfirmPassword"
                    type="password"
                    className="form-control"
                    id="ConfirmPassword"
                    onChange={this.inputChange}
                    noValidate
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
