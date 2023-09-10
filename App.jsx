import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";

import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
