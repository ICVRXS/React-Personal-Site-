import React from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <About />
      <Contact />
    </Router>
  );

}

export default App;
