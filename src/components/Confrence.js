import React, { Component } from 'react';
import { Container } from "reactstrap";
import Cards from '../components/Confrence-cards.js/RmCard';
import "./RmCard.css";

class Confrence extends Component {
    render() {
        return (
          <div style={{ marginTop: "200px", marginBottom: "800px" }}>
            <Cards/>
            <p>helloooooooo</p>
          </div>
        );
    }
}

export default Confrence