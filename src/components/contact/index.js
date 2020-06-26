import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Typed from "react-typed";

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col style={{ fontSize: "25px", marginLeft: "2rem" }}>
          <Typed
            strings={["CSS", "React", "Javascript", "Omar"]}
            typeSpeed={1}
            backSpeed={50}
            loop
          ></Typed>
        </Col>
        <Col>Place Holder 2</Col>
      </Row>
    </Container>
  );
}
