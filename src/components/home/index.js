import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import { ReactComponent as ProgrammerLogo } from "../../svg/programmer4.svg";
import { ReactComponent as GitHub } from "../../svg/github.svg";
import { ReactComponent as Linkedin } from "../../svg/linkedin.svg";
export default function Home() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12} className="mt-5">
          <div className="written-content mt-8">
            <h2 id="name" className="mt-5">
              Halit Batur
            </h2>
            <h1 classNama="mt-0">Junior Front End Developer</h1>
            <h4>Based in Istanbul</h4>
            <span>halitfuatbatur@gmail.com</span> <br></br>{" "}
            <span>+90 542 388 5810</span>
          </div>

          <ul className="list-unstyled social-links">
            <li className="d-inline-block m-2">
              <a
                href="https://github.com/Halit-Batur"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHub className="icon" />
              </a>
            </li>
            <li className="d-inline-block m-2">
              <a
                href="https://www.linkedin.com/in/halit-batur-481253197/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="icon" />
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={6} md={12} style={{ alignContent: "start" }}>
          <ProgrammerLogo className="m-0" style={{ width: "650px" }} />
        </Col>
      </Row>
    </Container>
  );
}
