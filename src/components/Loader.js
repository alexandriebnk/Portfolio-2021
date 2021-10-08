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
    const timeline = new gsap.timeline();
    timeline.to(loaderLine.current, {
      duration: "1",
      height: "100%",
      ease: "power4.inOut",
      onUpdate: () => {
        timeline.progress() >= 0.8 && setAnimationInDone(true);
      },
    });
  };

  const animateOut = () => {
    const timeline = new gsap.timeline();
    timeline
      .set(loaderRef.current, { backgroundColor: "transparent" })
      .to(loaderLine.current, {
        duration: ".8",
        height: "0",
        top: "100%",
        ease: "power4.in",
      })
      .set(loaderRef.current, { autoAlpha: "0" })
      .set("body", { overflow: "auto" });
  };

  return (
    <div className={"loader"} ref={loaderRef}>
      <p className={"loader_line"} ref={loaderLine}></p>
    </div>
  );
};

export default Loader;
