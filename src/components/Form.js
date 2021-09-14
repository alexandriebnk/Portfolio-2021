import React from "react";
import Input from "./Input";
import ConfirmButton from "./ConfirmButton";

const Form = ({ form: { name, email, message, bouton } }) => {
  return (
    <div className={"form"}>
      <div className={"form_inputs"}>
        <Input
          type="text"
          placeholder={name}
          /*onChange={}*/
        />
        <Input
          type="email"
          placeholder={email}
          /*onChange={}*/
        />
        <Input
          type="textarea"
          placeholder={message}
          /*onChange={}*/
        />
      </div>
      <div className={"form_btn"}>
        <ConfirmButton button={bouton} />
      </div>
    </div>
  );
};

export default Form;
