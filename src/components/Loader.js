import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ loaded }) => {
  const [animationInDone, setAnimationInDone] = useState(false);
  const loaderRef = useRef();
  const loaderLine = useRef();

  useEffect(() => {
    animateIn();
  }, []);

  useEffect(() => {
    loaded && animationInDone && animateOut();
  }, [loaded, animationInDone]);

  const animateIn = () => {
    gsap.fromTo(
      loaderLine.current,
      { width: "0" },
      {
        duration: "1",
        width: "40%",
        onComplete: () => setAnimationInDone(true),
      }
    );
  };

  const animateOut = () => {
    const timeline = new gsap.timeline();
    timeline
      .to(loaderLine.current, { duration: "1", width: "165px", left: "27%" })
      .to(loaderRef.current, { duration: ".5", autoAlpha: "0" })
      .set("body", { overflow: "auto" });
  };

  return (
    <div className={"loader"} ref={loaderRef}>
      <p className={"loader_line"} ref={loaderLine}></p>
    </div>
  );
};

export default Loader;
