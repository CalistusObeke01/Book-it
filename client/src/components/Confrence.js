import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Room from "./room";
import { AuthContext } from "../components/AuthContext";

const Confrence = props => {
  const {user} = useContext(AuthContext);
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
          console.log("effect");
        }
      })
      .catch(error => console.log(error));
  });

  if (rooms.length < 1) {
    return (
      <div style={{ marginBottom: "150px", marginTop: "100px" }}>
        <div className="wrapper">
          <div className="cols justify-content-center confr" style={{ minHeight: "80vh"}}>
            <h3>No Rooms available for this organization</h3>
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
