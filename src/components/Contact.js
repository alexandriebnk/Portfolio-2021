import React, { useContext } from "react";
import Form from "./Form";
import Network from "./Network";
import Context from "../store/Context";

const Contact = () => {
  const data = useContext(Context);

  return (
    <div className={"contact"} id="contact">
      <p className={"contact_number"}>
        <span>{data?.contact.number}</span>
      </p>
      <div className={"contact_informations"}>
        <div className={"contact_title"}>
          <h2 className={"title-h2"}>
            {data?.contact.informations.title.heading}
          </h2>
          <h2 className={"contact_year title-h2"}>
            {data?.contact.informations.title.year}
          </h2>
        </div>
        <div className={"contact_content"}>
          <div className={"contact_form"}>
            <Form />
          </div>
          <div className={"contact_network body-text"}>
            <Network />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
