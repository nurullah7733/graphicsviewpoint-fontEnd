import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let colorcorrection1 =
  "/assets/img/all_services_afterbefore/Color-Correction/2.jpg";
let colorcorrection2 =
  "/assets/img/all_services_afterbefore/Color-Correction/1.jpg";
let colorcorrection3 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-01.jpg";
let colorcorrection4 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-02.jpg";

const ColorCorrection = () => {
  return (
    <div>
      <TitleAndGallery
        title={"color correction services"}
        before1={colorcorrection1}
        after1={colorcorrection2}
        before2={colorcorrection3}
        after2={colorcorrection4}
      />
    </div>
  );
};

export default ColorCorrection;
