import React, { Component } from "react";
import Button from "./Button";
import { AuthContext } from "./AuthContext";
import Room from "./room";

// function SignUp()\
class AddForms extends Component {
  static contextType = AuthContext;
  state = {};

  getRole = ad => {
    if (ad == "Admin") {
      return true;
    } else {
      return false;
    }
  };
  addUser = e => {
    e.preventDefault();
    try {
      var { company, admin, UserName, email, password } = this.state;
      var company = this.context.user.company;
      var admin = this.getRole(admin);
      var name = UserName;
      fetch("/api/users/adminAdd", {
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

  addSpace = e => {
    e.preventDefault();
    try {
      var { RoomName, location, features, capacity } = this.state;
      var name = RoomName;
      var capacity = `${capacity} people`;
      var features = features.split(",");
      var company = this.context.user.company;
      fetch("/api/users/adminAdd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, name, capacity, features, location })
      })
        .then(response => {
          if (response.status === 201) {
            alert("Member added Successfully.");
            this.setState({});
          } else if (response.status === 403) {
            alert("An account already exists with this email address.");
            this.setState({});
          } else {
            alert("network error, please try again in a bit");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {}

    console.log(this.state);
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
                <label htmlFor="InputFullname">Full Name</label>
                <input
                  name="UserName"
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
                <label htmlFor="Role">Role</label>
                <select
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
                  name="password"
                  type="password"
                  className="form-control"
                  id="signUpPassword"
                  onChange={this.inputChange}
                  required
                />
                <small>password cannot be changed later</small>
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
                  name="RoomImg"
                  type="file"
                  className="form-control"
                  id="RoomImg"
                  accept="image/*"
                  onChange={this.inputChange}
                  plaintext
                />
              </div>
              <div className="form-group">
                <label htmlFor="RoomName">Name/Tag</label>
                <input
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
                  name="features"
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
