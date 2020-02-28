import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Room = props => {
  onclick = e => {
    e.preventDefault();
    sessionStorage.setItem("vId", JSON.stringify(e.target.id));
    // redirect to BookVenue
  };

  return (
    <div
      className="col-md-4 rooms"
      // ontouchstart="this.classList.toggle('hover');"
    >
      <div className="container1">
        <div
          className="front"
          id="front"
          style={{
            backgroundImage: `url(${props.venue.image})`,
            backgroundSize: "cover"
          }}
        >
          <div className="inner">
            <h5>{props.venue.name}</h5>
            <span>{props.venue.location}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <h3>Features</h3>
            <ul>
              {props.venue.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link to="/book-venue">
              <Button onClick={onclick} id={props.venue.id}>
                Book Now!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
