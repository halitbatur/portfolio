import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container } from "react-bootstrap";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navigator from "./components/navbar";
import Blog from "./components/blog";
import Projects from "./components/projects";
import "./App.css";

const routes = [
  { path: "/portfolio", name: "Home", Component: Home },
  { path: "/portfolio/about", name: "About", Component: About },
  { path: "/portfolio/contact", name: "Contact", Component: Contact },
  { path: "/portfolio/blog", name: "Blog", Component: Blog },
  { path: "/portfolio/projects", name: "Projects", Component: Projects },
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
