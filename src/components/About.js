import React, { useContext } from "react";
import Context from "../store/Context";

const About = () => {
  const data = useContext(Context);

  return (
    <div className={"about"} id="about">
      <div className={"about_container"}>
        <img
          src={data?.about.image.src}
          alt={data?.about.image.alt}
          className={"about_image"}
        />
      </div>
      <div className={"about_presentation"}>
        <h4 className={"presentation_heading title-h4"}>
          {data?.about.presentation.heading}
        </h4>
        <p
          className={"presentation_content body-text"}
          dangerouslySetInnerHTML={{
            __html: data?.about.presentation.content.replace(/\n/g, "<br>"),
          }}
        ></p>
      </div>
    </div>
  );
};

export default About;
