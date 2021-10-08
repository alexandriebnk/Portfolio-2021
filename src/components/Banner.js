import React, { useContext, useRef } from "react";
import Arrow from "./Arrow";
import Marquee from "react-fast-marquee";
import Context from "../store/Context";

const Banner = () => {
  const data = useContext(Context);

  const content = useRef();

  return (
    <div className={"banner"}>
      <Marquee speed={50} gradient={false}>
        {[...Array(4)].map((_, index) => (
          <div
            className={"banner_content"}
            ref={content}
            key={`banner-el-${index}`}
          >
            <h2 className={"title-h2"}>{data?.hero.project}</h2>
            <div className={"banner_arrow"}>
              <Arrow />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;
