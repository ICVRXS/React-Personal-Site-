import React, {Component} from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectCard from "./components/ProjectCard";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import projects from "./projects.json";
import {Jumbotron} from "react-bootstrap";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <Switch>
          <Jumbotron>
            <Nav />
            <Route exact path={["/", "/about", "/home"]}>
              <About />
            </Route>
            <Route exact path={["/portfolio"]}>
              {this.state.projects.map(project => (
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  image={project.image}
                  about={project.about}
                  repository={project.repository}
                  heroku={project.heroku}
                  />
              ))}
              </Route>
              <Route exact path={["/contact"]}>
                <Contact />
              </Route>
            </Jumbotron>
        </Switch>
      </Router>
    );
  }
}

export default App;

{/* <Router>
<div>
  <Switch>
    <Route exact path={["/", "/about"]}>
      <About />
    </Route>
    <Route exact path={["/portfolio"]}>
      <ProjectCard
          id={project.id}
          name={project.name}
          image={project.image}
          about={project.about}
          repository={project.repository}
          heroku={project.heroku}
      />
    </Route>
    <Route exact path={["/contact"]}>
      <Contact />
    </Route>
  </Switch>
</div>
</Router> */}