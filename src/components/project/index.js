import React from "react";
import { Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import ToDoer from "../../to-doer.png";
import MovieProject from "../../movie-project.png";
import Portfolio from "../../portfolio.png";

const imgSelector = {
  ToDoer,
  MovieProject,
  Portfolio,
};

export default function Project({ name, desc, github, tech, page, picture }) {
  return (
    <Col sm={12} md={6} lg={4} class="mt-5">
      <div className="proj">
        <Card>
          <Card.Img
            variant="top"
            src={imgSelector[picture]}
            style={{ heigth: "500px" }}
          />
          <Card.Body>
            <Card.Title className="proj-desc">{name}</Card.Title>
            <Card.Text className="proj-desc">
              <p>{desc}</p>
            </Card.Text>
            <Card.Text className="proj-desc">
              <small>Tech used: {tech.join(", ")}</small>
            </Card.Text>
          </Card.Body>
          <ul className="list-unstyled project-links">
            <li className="d-inline-block m-2">
              {" "}
              <a href={github} rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github icon fa-2x"></i>
              </a>
            </li>
            <li className="d-inline-block m-2">
              {" "}
              <a href={page} rel="noopener noreferrer" target="_blank">
                <i className="fas fa-link icon fa-2x"></i>
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </Col>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  page: PropTypes.string,
  picture: PropTypes.string,
  tech: PropTypes.array,
};
