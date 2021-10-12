import React, { useRef } from "react";
import gsap from "gsap";
import Bowser from "bowser";
import Eye from "./Eye";
import Arrow from "./Arrow";

const Project = ({ name, description, link }) => {
  const titleEye = useRef();
  const arrow = useRef();
  const descriptionProject = useRef();

  const {
    platform: { type },
  } = Bowser.parse(window.navigator.userAgent);

  const showAssets = () => {
    if (type === "mobile" || type === "tablet") return;

    gsap.fromTo(
      titleEye.current,
      { marginLeft: "-7rem" },
      { duration: ".5", marginLeft: "0" }
    );
    gsap.fromTo(arrow.current, { x: "-100%" }, { duration: ".5", x: "100%" });
    gsap.fromTo(
      descriptionProject.current,
      { x: "0" },
      { duration: ".5", x: "110%" }
    );
  };

  const hideAssets = () => {
    if (type === "mobile" || type === "tablet") return;

    gsap.fromTo(
      titleEye.current,
      { marginLeft: "0" },
      { duration: ".5", marginLeft: "-7rem" }
    );
    gsap.fromTo(arrow.current, { x: "100%" }, { duration: ".5", x: "-100%" });
    gsap.fromTo(
      descriptionProject.current,
      { x: "100%" },
      { duration: ".5", x: "0" }
    );
  };

  return (
    <li
      className={"project"}
      onMouseEnter={showAssets}
      onMouseLeave={hideAssets}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={"project_link"}
      >
        <div className={"project_heading"} ref={titleEye}>
          <div className={"project_eye"}>
            <Eye />
          </div>
          <h3 className={"title-h3"}>{name}</h3>
        </div>
        <div className={"project_content"}>
          <div className={"project_arrow"} ref={arrow}>
            <Arrow />
          </div>
          <p
            className={"body-text"}
            ref={descriptionProject}
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br>"),
            }}
          ></p>
        </div>
      </a>
    </li>
  );
};

export default Project;
