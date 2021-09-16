import React, { useContext } from "react";
import DataContext from "../store/DataContext";

const Network = () => {
  const {
    contact: {
      informations: {
        network: { note, email, instagram, linkedIn },
      },
    },
  } = useContext(DataContext);

  return (
    <div className={"network"}>
      <p className={"network_note"}>{note}</p>
      <div className={"network_content"}>
        <a
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          className={"content_email text-body"}
        >
          Email
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={"content_instagram text-body"}
        >
          Instagram
        </a>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={"content_linkedin text-body"}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Network;
