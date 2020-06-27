import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../project";
import "./styles.css";
import projects from "../data";

export default function Projects() {
  console.log(projects);
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 id="main">Projects</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </Row>
    </Container>
  );
}
