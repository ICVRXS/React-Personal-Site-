import React, {Component} from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectCard from "./components/ProjectCard";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import projects from "./projects.json";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <About />
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
        <Contact />
      </Router>
    );

  }
}

export default App;
