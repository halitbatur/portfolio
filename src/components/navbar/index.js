import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

export default function Navigator(props) {
  const renderRoutes = () => {
    return props.routes.map((route) => (
      <NavLink
        className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold"
        key={route.path}
        as={NavLink}
        to={route.path}
        activeClassName="link-active"
        exact
      >
        {route.name}
      </NavLink>
    ));
  };
  return (
    <>
      <Navbar expand="lg">
        <Nav className="ml-auto">{renderRoutes()}</Nav>
      </Navbar>
    </>
  );
}

Navigator.propTypes = {
  routes: PropTypes.array,
};
