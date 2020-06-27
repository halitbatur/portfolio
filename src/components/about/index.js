import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as AboutSVG } from "../../about.svg";

export default function About() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <AboutSVG
            style={{
              width: "550px",
            }}
            className="mt-5"
          />
        </Col>
        <Col lg={6} md={12}>
          About
        </Col>
      </Row>
    </Container>
  );
}
