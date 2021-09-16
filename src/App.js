import React, { Fragment } from "react";
import "./sass/app.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Contact />
    </Fragment>
  );
}

export default App;
