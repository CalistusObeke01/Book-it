import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import Card from "./RmCardUi";
import img1 from "../../images/Room1.png";
import img2 from "../../images/Room2.png";
import img3 from "../../images/Room3.png";
import img4 from "../../images/Room4.png";
import img5 from "../../images/Room5.png";
import img6 from "../../images/Room6.png";

class Cards extends Component {
  render() {
    return (
      <Container id="farm">
        <div className="container-fluid d-flex ">
          <div className="row">
            <Col className="" id="Room">
              <div className="col-md-4">
                <Card
                  imgsrc={img1}
                  title="Standard Confrence Room 1"
                  text="Floor 1 E122, Lekki, Lagos"
                />
              </div>
              <div className="col-md-4">
                <Card
                  imgsrc={img2}
                  title="Standard Confrence Room 2"
                  text="Floor 2 E235, Lekki, Lagos"
                />
              </div>

              <div className="col-md-4">
                <Card
                  imgsrc={img3}
                  title="Big Confrence Room"
                  text="Apapa Lagos"
                />
              </div>
              <div className="col-md-4">
                <Card
                  imgsrc={img4}
                  title="Executive Main Event Hall1"
                  text="Ikoyi, Lagos"
                />
              </div>

              <div className="col-md-4">
                <Card
                  imgsrc={img5}
                  title="Standard Confrence Room 3"
                  text="Floor 3 E350, Lekki, Lagos"
                />
              </div>
              <div className="col-md-4">
                <Card
                  imgsrc={img6}
                  title="Small Confrence Room"
                  text="Floor 2 E210, Lekki, Lagos"
                />
              </div>
            </Col>
          </div>
        </div>
      </Container>
    );
  }
}

export default Cards;
