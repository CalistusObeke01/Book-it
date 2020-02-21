import React from 'react';
import Room1 from "../images/Room1.png";
import Room2 from "../images/Room2.png";
import Room3 from "../images/Room3.png";
import Room4 from "../images/Room4.png";
import Room5 from "../images/Room5.png";
import Room6 from "../images/Room6.png";
// import './Card.css';
import "../App.css";


class Confrence extends React.Component{
 render() {
    // const Images = [
      // require("../images/Room1.png"),
      // require("../images/Room2.png"),
      // require("../images/Room3.png"),
      // require("../images/Room4.png"),
      // require("../images/Room5.png"),
      // require("../images/Room6.png")
    // ];

        return (
          <div style={{ marginBottom: "150px", marginTop: "100px" }}>
            <div className="wrapper">
              <h1 className="h11">BookiT Confrence Rooms</h1>
              <div className="cols confr">
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                  // background-image={Room1}
                >
                  <div className="container1">
                    <div
                      className="front"
                      id="front"
                      style={{
                        backgroundImage: "url(" + Room1 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Standard Confrence Room 1</h5>
                        <span>Floor 1 E122, Lekki, Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>100 seating space</li>
                          <li>Audio visual equipments</li>
                          <li>Hi-Tech Projectors</li>
                          <li>Sound Proofed walls</li>
                          <li>Full Air Conditioned</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="container1">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(" + Room2 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Standard Confrence Room 2</h5>
                        <span>Floor 2 E235, Lekki, Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>70 seating spaces</li>
                          <li>24/7 Internet connection</li>
                          <li>Sound proof walls</li>
                          <li>Large Monitors</li>
                          <li>Whiteboard/fresh markers for writting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="container1">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(" + Room3 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Big Confrence Room</h5>
                        <span>Apapa Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>150 seating spaces</li>
                          <li>24/7 Internet connection</li>
                          <li>Sound proof walls</li>
                          <li>2 Large Monitors</li>
                          <li>Audio/Visual equipments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="container1">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(" + Room4 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Main Event Hall</h5>
                        <span>Ikoyi, Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>500 seating spaces</li>
                          <li>Equiped stage with lighting</li>
                          <li>Sound proof walls</li>
                          <li>Large Monitors</li>
                          <li>Access to 24/7 Internet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="container1">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(" + Room5 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Standard Confrence Room 3</h5>
                        <span>Floor 2 E210, Lekki, Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>200 seating spaces</li>
                          <li>Confrence Call Phones</li>
                          <li>Sound proof walls</li>
                          <li>Hi-Tech Projectors</li>
                          <li>Access to 24/7 Internet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="container1">
                    <div
                      className="front"
                      style={{
                        backgroundImage: "url(" + Room6 + ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="inner">
                        <h5>Small Confrence Room</h5>
                        <span>Floor 2 E210, Lekki, Lagos</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <h3>Features</h3>
                        <ul>
                          <li>20 seating spaces</li>
                          <li>Hi-Tech Projector</li>
                          <li>Audio/Viual Equipments</li>
                          <li>Large Monitors</li>
                          <li>Access to 24/7 Internet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Confrence