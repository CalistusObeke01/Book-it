import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Room from "./room";
import { AuthContext } from "../components/AuthContext";

const Confrence = props => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    fetch(`/api/venue/${user.company}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          setRooms(data.body);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (rooms.length < 1) {
    return (
      <div style={{ marginBottom: "150px", marginTop: "100px" }}>
        <div className="wrapper">
          <div
            className="cols align-middle confr"
            style={{ minHeight: "50vh" }}
          >
            <h3 style={{ height: "50%", margin: "auto" }}>
              No spaces available for {user.company}
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "150px", marginTop: "100px" }}>
        <div className="wrapper">
          <div className="cols confr">
            {rooms.map((room, i) => (
              <Room venue={room} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Confrence;
