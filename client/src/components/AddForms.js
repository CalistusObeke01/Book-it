import React, { Component } from "react";
import Button from "./Button";
import { AuthContext } from "./AuthContext";

// function SignUp()\
class AddForms extends Component {
  static contextType = AuthContext;
  state = {};

  addUser = e => {
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

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <section className="signUp-section" id="sign-up">
          <div className="col-md-5">
            <p className="signUp-heading lead">
              Ready to create your <b>account? Sign Up</b>
            </p>
            <p className="signUp-subHeading">
              Add Team member to <span>Book!T</span>
            </p>

            <form onSubmit={this.addUser}>
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
                <small>password cannot be changed</small>
              </div>
              <Button type="submit">Add</Button>
            </form>
          </div>
          <div className="col-md-2 form-split"></div>

          <div className="col-md-5">
            <p className="signUp-heading lead">
              Ready to create your <b>account? Sign Up</b>
            </p>
            <p className="signIn-subHeading">Add Space</p>

            <form>
              <div className="form-group">
                <label htmlFor="RoomName">Name/Tag</label>
                <input
                  name="RoomImg"
                  type="file"
                  className="form-control"
                  id="RoomImg"
                  accept="image/x-png,x-jpg"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="RoomName">Name/Tag</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="RoomName"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="RoomLocation">Location</label>
                <input
                  name="Location"
                  type="text"
                  className="form-control"
                  id="RoomLocation"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="RoomCapacity">Capacity</label>
                <input
                  name="Capacity"
                  type="text"
                  className="form-control"
                  id="RoomCapacity"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="RoomFeatures">Features/Facilities</label>
                <input
                  name="Features"
                  type="textarea"
                  className="form-control"
                  id="RoomFeatures"
                  onChange={this.inputChange}
                  required
                />
                <small>
                  comma separated list of available features/facilities
                </small>
              </div>
              <Button type="submit">Add</Button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default AddForms;
