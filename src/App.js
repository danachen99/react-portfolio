import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Switch>
    //     <Route exact path="/"><About /></Route>
    //     <Route exact path="/home"><About /></Route>
    //     <Route exact path="/projects"><Projects /></Route>
    //     <Route exact path="/contact"><Contact /></Route>
    //     </Switch>
    //   </div>
    // </Router>
        <div>
         <Navbar />
         <About />
         <Projects />
         <Contact />
       </div>
  );
}

export default App;
