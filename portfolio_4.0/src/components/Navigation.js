import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const navStyle = {
  display: "flex",
  fontFamily: "monospace",
  textDecoration: "none",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "30px",
};

export default function Nav() {
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <Link to="/about" style={linkStyle}>
            About Me
          </Link>
          <Link to="/portfolio" style={linkStyle}>
            Portfolio
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact Me
          </Link>
          <Link to="/resume" style={linkStyle}>
            Resume
          </Link>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
