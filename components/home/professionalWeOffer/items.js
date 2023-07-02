import React from "react";
import ComparingImg from "../../common/comparingImg/comparingImg";
import Btn from "../../common/btn/btn";

const ItemsSection = ({
  header,
  paragraph,
  btnHref,
  btnText,
  afterImg,
  beforeImg,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="w-full text-center lg:w-1/2 ">
        <h1 className="pb-4 title">{header}</h1>
        <p className="pb-4 text-base text-justify">{paragraph}</p>
        <Btn btnHref={btnHref} btnText={btnText} />
      </div>
      <div className="w-full lg:w-1/2 ">
        <ComparingImg after={beforeImg} before={afterImg} />
      </div>
    </div>
  );
};

export default ItemsSection;
