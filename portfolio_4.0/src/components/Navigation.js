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
  justifyContent: "space-evenly",
  flexWrap: 'wrap'
};

export default function Nav() {
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <Link to="/about" className="link">
            About Me
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/contact" className="link">
            Contact Me
          </Link>
          <Link to="/resume" className="link">
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
