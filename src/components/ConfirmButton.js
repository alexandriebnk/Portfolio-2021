import React, { useContext } from "react";
import DataContext from "../store/DataContext";

const ConfirmButton = () => {
  const {
    contact: {
      informations: {
        form: { bouton },
      },
    },
  } = useContext(DataContext);

  return <button className={"confirmButton text-lead"}>{bouton}</button>;
};

export default ConfirmButton;
