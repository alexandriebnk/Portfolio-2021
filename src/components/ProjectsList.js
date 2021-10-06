import React, { useContext } from "react";
import Project from "./Project";
import Context from "../store/Context";

const ProjectsList = () => {
  const data = useContext(Context);

  return (
    <ul className={"projects_list"} id="projectsList">
      {data?.projectsList.map(({ name, description, link }, index) => (
        <Project
          name={name}
          description={description}
          link={link}
          key={`projet-${name}-${index}`}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
