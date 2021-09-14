import React from "react";

const Network = ({
  network: {
    note,
    email: { title1, email },
    instagram: { title2, instagram },
    linkedIn: { title3, linkedIn },
  },
}) => {
  return (
    <div className={"network"}>
      <p className={"network_note"}></p>
      <div className={"network_content"}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Network;
