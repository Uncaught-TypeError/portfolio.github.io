import React from "react";
import Nav from "./components/Nav/Nav";
import FirstSec from "./components/FirstSec/FirstSec";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div>
        <Nav />
        <FirstSec />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
