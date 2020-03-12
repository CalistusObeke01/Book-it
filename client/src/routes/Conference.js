import React, { useState, useEffect, useContext } from "react";
import Room from "../components/room";
import { AuthContext } from "../components/AuthContext";

const Conference = props => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState("");

  useEffect(() => {
                    fetch(`/api/spaces/${user.company}`)
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
                    // eslint-disable-next-line
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

export default Conference;