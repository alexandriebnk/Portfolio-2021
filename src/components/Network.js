import React, { useContext } from "react";
import Context from "../store/Context";

const Network = () => {
  const data = useContext(Context);

  return (
    <div className={"network"}>
      <p
        className={"network_note"}
        dangerouslySetInnerHTML={{
          __html: data?.contact.informations.network.note.replace(
            /\n/g,
            "<br>"
          ),
        }}
      ></p>
      <div className={"network_content"}>
        <a
          href={data?.contact.informations.network.github}
          target="_blank"
          rel="noopener noreferrer"
          className={"content_linkedin text-body"}
        >
          Github
        </a>
        <a
          href={`mailto:${data?.contact.informations.network.email}`}
          className={"content_email text-body"}
        >
          Email
        </a>
        <a
          href={data?.contact.informations.network.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={"content_instagram text-body"}
        >
          Instagram
        </a>
        <a
          href={data?.contact.informations.network.linkedIn}
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
