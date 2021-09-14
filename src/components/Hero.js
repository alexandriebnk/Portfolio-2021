import React, { useContext } from "react";
import Logo from "./Logo";
import DataContext from "../store/DataContext";

const Hero = () => {
  const {
    hero: { about, project, copyright, contact, logo },
  } = useContext(DataContext);

  return (
    <div className={"hero"}>
      <div className={"hero_top text-lead"}>
        <p>{about}</p>
        <p>{project}</p>
      </div>
      <h1 className={"hero_logo"} aria-label={logo}>
        <Logo />
      </h1>
      <div className={"hero_bottom text-lead"}>
        <p>{copyright}</p>
        <p>{contact}</p>
      </div>
    </div>
  );
};

export default Hero;
