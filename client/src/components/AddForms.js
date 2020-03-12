import React, { Component } from "react";
import Button from "./Button";
import { AuthContext } from "./AuthContext";

let validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
class AddForms extends Component {
  static contextType = AuthContext;
  state = {
    UserName: null,
    email: null,
    password: null,
    ConfirmPassword: null,
    errors: {
      UserName: "",
      email: "",
      password: "",
      ConfirmPassword: ""
    }
  };

  getRole = ad => {
    if (ad === "Admin") {
      return true;
    } else {
      return false;
    }
  };

  toArray = str => {
    return str.split(",");
  };

  addUser = e => {
    e.preventDefault();
    if (this.state.ConfirmPassword === this.state.password) {
      try {
        var { admin, UserName, email, password } = this.state;
        var company = this.context.user.company;
        admin = this.getRole(admin);
        var name = UserName;
        var uk = sessionStorage.getItem("mx");

        fetch(`/api/users/adminAdd/${uk}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company, name, email, password, admin })
        })
          .then(response => {
            if (response.status === 201) {
              alert("Member added Successfully.");
              this.setState({});
            } else if (response.status === 403) {
              alert("An account already exists with this email address.");
              this.setState({});
            } else if (response.status === 401) {
              alert("You do not have the required permission.");
              this.setState({});
            } else {
              alert("network error, please try again in a bit");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        alert("Operation failed. Please try again");
        console.log(error);
      }
    } else {
      alert("Confirm does not match Password");
    }
  };

  addSpace = e => {
    e.preventDefault();
    try {
      var { RoomName, location, feature, capacity } = this.state;
      var name = RoomName;
      capacity = `${capacity} seater`;
      var features = this.toArray(feature);
      features.unshift(capacity);
      var company = this.context.user.company;
      fetch("/api/venue/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, name, features, location })
      })
        .then(response => {
          if (response.status === 201) {
            alert("Space added Successfully.");
            this.setState({});
          } else if (response.status === 400) {
            alert("Error adding space.");
            this.setState({});
          } else {
            alert("network error, please try again in a bit");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      alert("Operation failed. Please try again");
      console.log(error);
    }
  };

  uploadSpaceImg = e => {
    e.preventDefault();
    var image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    try {
      fetch("/api/venue/upload/", {
        method: "POST",
        body: formData
      }).then(response => {
        if (response.status !== 200) {
          console.log(response.json());
        }
      });
    } catch (error) {
      alert("Error! please try again");
      console.log(error);
    }
  };

  inputChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "UserName":
        errors.UserName =
          value.length < 6
            ? "Full Name must be at least 6 characters long."
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long."
            : "";
        break;
      case "ConfirmPassword":
        errors.ConfirmPassword =
          value !== this.state.password ? "Passwords do not match." : "";
        break;
      default:
    }

    this.setState(
      {
        errors,
        [name]: value
      },
      () => {
        console.log(errors);
      }
    );
  };

  render() {
    let errors = this.state.errors;
    return (
      <>
        <section className="signUp-section" id="sign-up">
          <div className="col-md-5">
            <div>
              {" "}
              <p className="signUp-heading lead">Add Member</p>
            </div>

            <form onSubmit={this.addUser}>
              <div className="form-group">
                <label htmlFor="InputFullName">Full Name</label>
                <input
                  // value={this.state.UserName}
                  name="UserName"
                  type="text"
                  className="form-control"
                  id="InputFullName"
                  onChange={this.inputChange}
                  required
                />
                {errors.UserName.length > 0 && (
                  <span className="error">{errors.UserName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <input
                  // value={this.state.email}
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="email"
                  onChange={this.inputChange}
                  required
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="Role">Role</label>
                <select
                  // value={this.state.admin}
                  className="form-control"
                  id="Role"
                  name="admin"
                  onChange={this.inputChange}
                  required
                >
                  <option>Admin</option>
                  <option>Member</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <input
                  // value={this.state.password}
                  name="password"
                  type="password"
                  className="form-control"
                  id="signUpPassword"
                  onChange={this.inputChange}
                  required
                />
                <small>password cannot be changed later</small>
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
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
                  required
                />
                {errors.ConfirmPassword.length > 0 && (
                  <span className="error">{errors.ConfirmPassword}</span>
                )}
              </div>
              <Button type="submit">Add</Button>
            </form>
          </div>

          <div className="col-md-2 form-split"></div>

          <div className="col-md-5">
            <div>
              {" "}
              <p className="signUp-heading lead">Add Space</p>
            </div>

            <form onSubmit={this.addSpace}>
              <div className="form-group ">
                <label htmlFor="RoomImg">Image</label>
                <input
                  value={this.state.RoomImg}
                  name="RoomImg"
                  type="file"
                  className="form-control"
                  id="RoomImg"
                  accept="image/*"
                  onChange={this.uploadSpaceImg}
                />
              </div>

              <div className="form-group">
                <label htmlFor="RoomName">Name/Tag</label>
                <input
                  value={this.state.RoomName}
                  name="RoomName"
                  type="text"
                  className="form-control"
                  id="RoomName"
                  onChange={this.inputChange}
                  required
                />
                <small>
                  Easily identifiable name/tag by members of your organization
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="RoomLocation">Location</label>
                <input
                  value={this.state.location}
                  name="location"
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
                  value={this.state.capacity}
                  name="capacity"
                  type="number"
                  className="form-control"
                  id="RoomCapacity"
                  onChange={this.inputChange}
                  required
                />
                <small>Number of people the space can sit</small>
              </div>
              <div className="form-group">
                <label htmlFor="RoomFeatures">Features/Facilities</label>
                <input
                  value={this.state.feature}
                  name="feature"
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
