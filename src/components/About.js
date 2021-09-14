import React, { useContext } from "react";
import DataContext from "../store/DataContext";

const About = () => {
  const {
    about: {
      image: { src, alt },
      presentation: { heading, content },
    },
  } = useContext(DataContext);

  return (
    <div className={"about"}>
      <div className={"about_wrapper"}>
        <img src={src} alt={alt} className={"about_image"} />
      </div>
      <div className={"about_presentation"}>
        <h4 className={"presentation_heading title-h4"}>{heading}</h4>
        <p className={"presentation_content body-text"}>{content}</p>
      </div>
    </div>
  );
};

export default About;
