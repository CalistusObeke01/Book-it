import React from "react";

import "../App.css";
import Room from "./room";
import confrenceRooms from "./Confrence1";

const Confrence = props => {
  return (
    <div style={{ marginBottom: "150px", marginTop: "100px" }}>
      <div className="wrapper">
        
        <div className="cols confr">
          {confrenceRooms.map((room, i) => (
            <Room venue={room} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confrence;
