import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let clipping1 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP_Multi-Path-Service_02.jpg";
let clipping2 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP_Multi-Path-Service_01.jpg";
let clipping3 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path1.jpg";
let clipping4 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path2.jpg";

const ClippingPath = () => {
  return (
    <div>
      <TitleAndGallery
        title={"clipping path services"}
        before1={clipping1}
        after1={clipping2}
        before2={clipping3}
        after2={clipping4}
      />
    </div>
  );
};

export default ClippingPath;
