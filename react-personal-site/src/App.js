import React from 'react';
import './App.css';
import About from "./pages/About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <About />
    </Router>
  );

}

export default App;
