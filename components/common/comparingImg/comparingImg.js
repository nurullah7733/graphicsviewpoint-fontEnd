import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ComparingImg = ({ before, after }) => {
  return (
    <>
      <ReactCompareSlider
        changePositionOnHover={true}
        itemOne={
          <ReactCompareSliderImage
            src={before}
            srcSet={before}
            alt="Image one"
            style={{ border: "1px solid black" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            srcSet={after}
            alt="Image two"
            style={{ border: "1px solid black" }}
          />
        }
      />
    </>
  );
};

export default ComparingImg;
