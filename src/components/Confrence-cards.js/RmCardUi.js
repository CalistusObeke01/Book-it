import React from "react";
import { Container } from "reactstrap";
// import "./RmCard.css";
// import FormModal from "../auth/FormModal";

const Card = props => {
  return (
    <Container id="card" style={{ width: "18rem" }}>
      <Card className="card text-center shadow">
        <div className="overflow">
          <img
            src={props.imgsrc}
            alt="chicken"
            className="card-img-top"
            height="200px"
          />
        </div>
        <div
          className="card-body text-white"
          style={{ backgroundColor: "#18449C" }}
        >
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-primary text-white">{props.text}</p>

          {/* <Link to="/form" className="btn btn-outline-success">
              Invest Today
            </Link>
              */}
          {/* <FormModal /> */}
        </div>
      </Card>
    </Container>
  );
};

export default Card;
