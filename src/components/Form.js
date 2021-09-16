import React, { useState, useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import ConfirmButton from "./ConfirmButton";
import DataContext from "../store/DataContext";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const button = useRef();
  const {
    contact: {
      informations: {
        form: { name: nameUser, email: emailUser, message },
      },
    },
  } = useContext(DataContext);

  // eslint-disable-next-line
  const regExName = /^[A-Za-zàäâéèëêïîôùüÿçœ\'-]{2,}/;
  // eslint-disable-next-line
  const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // eslint-disable-next-line
  const regExText = /^[a-zA-Z0-9.,\s]*$/;

  const onNameChange = (e) => {
    if (regExName.test(e.target.value)) {
      setName(e.target.value);
      gsap.to(e.target, { color: "#1A150C" });
    } else {
      setName(null);
      gsap.to(e.target, { color: "#D25711" });
    }
  };

  const onEmailChange = (e) => {
    if (regExEmail.test(e.target.value)) {
      setEmail(e.target.value);
      gsap.to(e.target, { color: "#1A150C" });
    } else {
      setEmail(null);
      gsap.to(e.target, { color: "#D25711" });
    }
  };

  const onTextChange = (e) => {
    if (regExText.test(e.target.value)) {
      setText(e.target.value);
      gsap.to(e.target, { color: "#1A150C" });
    } else {
      setText(null);
      gsap.to(e.target, { color: "#D25711" });
    }
  };

  useEffect(() => {
    if (name && email && text) {
      gsap.set(button.current, { opacity: "1", pointerEvents: "all" });
    } else {
      gsap.set(button.current, { opacity: ".3", pointerEvents: "none" });
    }
  }, [name, email, text]);

  return (
    <form className={"form"}>
      <input
        className={"form_name body-text"}
        type="text"
        placeholder={nameUser}
        onChange={onNameChange}
      />
      <input
        className={"form_email body-text"}
        type="email"
        placeholder={emailUser}
        onChange={onEmailChange}
      />
      <textarea
        className={"form_text body-text"}
        placeholder={message}
        onChange={onTextChange}
        rows="7"
      ></textarea>
      <div className={"form_btn"} ref={button}>
        <ConfirmButton />
      </div>
    </form>
  );
};

export default Form;
