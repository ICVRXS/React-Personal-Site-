import React from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <About />
      <Portfolio />
      <Contact />
    </Router>
  );

}

export default App;
