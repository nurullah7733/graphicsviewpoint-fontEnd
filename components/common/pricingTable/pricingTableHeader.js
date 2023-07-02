import React from "react";
import ComparingImg from "../../common/comparingImg/comparingImg";

const PricingTableHeader = ({ before, after, headerText }) => {
  return (
    <div className="mx-auto md:max-w-xl">
      <div>
        <ComparingImg before={before} after={after} />
        <h2 className="pt-4 title">{headerText}</h2>
      </div>
    </div>
  );
};

export default PricingTableHeader;
