import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Typed from "react-typed";
import { ReactComponent as Monkey } from "../../monkey.svg";
import "./styles.css";

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col style={{ fontSize: "25px", marginTop: "2rem" }}>
          <Typed
            strings={["CSS", "React", "Javascript", "Omar"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </Col>
        <Col>
          <div className="svg-container">
            <Monkey />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
