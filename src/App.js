import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container } from "react-bootstrap";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navigator from "./components/navbar";
import "./App.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
];

export default function App() {
  return (
    <Router className="App">
      <>
        <Container>
          <Navigator routes={routes} />
        </Container>

        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </>
    </Router>
  );
}
