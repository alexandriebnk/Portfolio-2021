import React, { useContext } from "react";
import Context from "../store/Context";

const ConfirmButton = () => {
  const data = useContext(Context);

  return (
    <button className={"confirmButton cursor-pointer text-lead"}>
      {data?.contact.informations.form.button}
    </button>
  );
};

export default ConfirmButton;
