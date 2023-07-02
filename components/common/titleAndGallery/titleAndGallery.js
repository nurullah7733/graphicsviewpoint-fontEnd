import React from "react";
import ComparingImg from "../comparingImg/comparingImg";

const TitleAndGallery = ({ title, before1, after1, before2, after2 }) => {
  return (
    <div className="pb-8 pt-14">
      <div className="mx-8">
        <h1 className="pb-5 title">{title.toUpperCase()}</h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="shadow-2xl ">
            <ComparingImg before={before1} after={after1} />
          </div>
          <div className="shadow-2xl">
            <ComparingImg before={before2} after={after2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAndGallery;
