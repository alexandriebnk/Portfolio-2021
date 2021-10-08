import React, { useState, useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { send } from "emailjs-com";
import Context from "../store/Context";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const button = useRef();

  const data = useContext(Context);

  // eslint-disable-next-line
  const regExName = /^[A-Za-zàäâéèëêïîôùüÿçœ\'-]{2,}/;
  // eslint-disable-next-line
  const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // eslint-disable-next-line
  const regExMessage = /^[a-zA-Z0-9.,\s]*$/;

  const resetInput = () => {
    form.current.reset();
    setName(null);
    setEmail(null);
    setMessage(null);
    setTimeout(() => {
      resetButton();
    }, 3000);
  };

  const resetButton = () => {
    button.current.innerHTML = data?.contact.informations.form.defaultButton;
  };

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

  const onMessageChange = (e) => {
    if (regExMessage.test(e.target.value)) {
      setMessage(e.target.value);
      gsap.to(e.target, { color: "#1A150C" });
    } else {
      setMessage(null);
      gsap.to(e.target, { color: "#D25711" });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    button.current.innerHTML = data?.contact.informations.form.processingButton;

    const toSend = {
      name,
      email,
      message,
    };

    try {
      const response = await send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAIL_JS_USER_ID
      );
      if (response.status === 200) {
        button.current.innerHTML =
          data?.contact.informations.form.successButton;

        resetInput();
      }
    } catch (error) {
      button.current.innerHTML = data?.contact.informations.form.failButton;
      resetInput();
    }
  };

  useEffect(() => {
    if (name && email && message) {
      gsap.set(button.current, {
        opacity: "1",
        pointerEvents: "all",
      });
    } else {
      gsap.set(button.current, { opacity: ".3", pointerEvents: "none" });
    }
  }, [name, email, message]);

  return (
    <form className={"form"} onSubmit={onSubmit} ref={form}>
      <input
        className={"form_name text-lead"}
        type="text"
        placeholder={data?.contact.informations.form.name}
        onChange={onNameChange}
      />
      <input
        className={"form_email text-lead"}
        type="email"
        placeholder={data?.contact.informations.form.email}
        onChange={onEmailChange}
      />
      <textarea
        className={"form_message body-text"}
        placeholder={data?.contact.informations.form.message}
        onChange={onMessageChange}
        rows="7"
      ></textarea>
      <button
        type="submit"
        className={"form_button cursor-pointer text-lead"}
        ref={button}
      >
        {data?.contact.informations.form.defaultButton}
      </button>
    </form>
  );
};

export default Form;
