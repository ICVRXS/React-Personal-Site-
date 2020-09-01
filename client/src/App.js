import React, {Component} from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import projects from "./projects.json";
import { Container } from 'react-bootstrap';

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
          <Container className="px-0">
            <NavBar />
            <Switch>
              <Route exact path={["/", "/about", "/home"]}>
                <About />
              </Route>
              <Route exact path={["/portfolio"]}>
                <ProjectCard />
              </Route>
              <Route exact path={["/contact"]}>
                <Contact />
              </Route>
              </Switch>
          </Container>
      </Router>
    );
  }
}

export default App;
