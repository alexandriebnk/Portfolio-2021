import React, { useContext } from "react";
import Form from "./Form";
import Network from "./Network";
import DataContext from "../store/DataContext";

const Contact = () => {
  const {
    contact: {
      title: { heading, year },
      form,
      network,
    },
  } = useContext(DataContext);

  return (
    <div className={"contact"}>
      <div className={"contact_wrapper"}>
        <div className={"wrapper_design"}></div>
        <div className={"wrapper_informations"}>
          <div className={"contact_title"}>
            <h2>{heading}</h2>
            <p>{year}</p>
          </div>
          <div className={"contact_content"}>
            <div className={"contact_form"}>
              <Form form={form} />
            </div>
            <div className={"contact_network"}>
              <Network />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
