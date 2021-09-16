import React, { useContext } from "react";
import Form from "./Form";
import Network from "./Network";
import DataContext from "../store/DataContext";

const Contact = () => {
  const {
    contact: {
      design: { number },
      informations: {
        title: { heading, year },
      },
    },
  } = useContext(DataContext);

  return (
    <div className={"contact"}>
      <p className={"contact_number"}>{number}</p>
      <div className={"contact_informations"}>
        <div className={"contact_title"}>
          <h2 className={"title-h2 contact_heading"}>{heading}</h2>
          <p className={"title-h2 contact_year"}>{year}</p>
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
