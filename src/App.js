import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/projects"><Projects /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </div>
    </Router>
  );
}

export default App;
