import React, { useContext } from "react";
import Logo from "./Logo";
import AnchorContext from "../store/AnchorContext";

const Hero = () => {
  const { about, project, copyright, contact } = useContext(AnchorContext);

  return (
    <div className={"hero"}>
      <div className={"hero_top text-lead"}>
        <p>{about}</p>
        <p>{project}</p>
      </div>
      <div className={"hero_logo"}>
        <Logo />
      </div>
      <div className={"hero_bottom text-lead"}>
        <p>{copyright}</p>
        <p>{contact}</p>
      </div>
    </div>
  );
};

export default Hero;
