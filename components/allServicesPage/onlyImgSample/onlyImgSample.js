import React from "react";
import ComparingImg from "../../common/comparingImg/comparingImg";

const OnlyImgSample = ({
  heading,
  after1,
  before1,
  after2,
  before2,
  after3,
  before3,
  after4,
  before4,
}) => {
  return (
    <div>
      <h1 className="mb-10 title">{heading}</h1>
      <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
        <ComparingImg after={before1} before={after1} />
        <ComparingImg after={before2} before={after2} />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ComparingImg after={before3} before={after3} />
        <ComparingImg after={before4} before={after4} />
      </div>
    </div>
  );
};

export default OnlyImgSample;
