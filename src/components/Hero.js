import React, { useContext } from "react";
import Logo from "./Logo";
import Context from "../store/Context";

const Hero = () => {
  const data = useContext(Context);

  const onScroll = (section) => {
    const topAbout = document
      .getElementById("about")
      .getBoundingClientRect().top;
    const topProjectsList = document
      .getElementById("projectsList")
      .getBoundingClientRect().top;
    const topContact = document
      .getElementById("contact")
      .getBoundingClientRect().top;

    let top = null;

    switch (section) {
      case "about":
        top = topAbout;
        break;
      case "projectsList":
        top = topProjectsList;
        break;
      case "contact":
        top = topContact;
        break;
      default:
        break;
    }

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <div className={"hero"}>
      <div className={"hero_top text-lead"}>
        <p className={"cursor-pointer"} onClick={() => onScroll("about")}>
          {data?.hero.about}
        </p>
        <p
          className={"cursor-pointer"}
          onClick={() => onScroll("projectsList")}
        >
          {data?.hero.project}
        </p>
      </div>
      <h1 className={"hero_logo"} aria-label={data?.hero.logo}>
        <Logo />
      </h1>
      <div className={"hero_bottom text-lead"}>
        <p>{data?.hero.copyright}</p>
        <p className={"cursor-pointer"} onClick={() => onScroll("contact")}>
          {data?.hero.contact}
        </p>
      </div>
    </div>
  );
};

export default Hero;
