import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const ClippingpathService = () => {
  const before =
    "assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Clipping Path Services"}
          description={
            "Clipping Path is the background remove way from in image. Simply put, clipping path separates the background from the image. Clipping path isthe stylish way to remove the background of the original object which isdone with pen tool. There are many Ecommerce companies in different countries. online shops, magazine design, web design, print publishing assiduity, online product stores, journals and many other fields including are used Clipping path. As like Background remove service,Cutout Service, color correction service, Multi path, Color pathservice, etc. Photographers are use clipping path way for e-commerce product editing. For example, background remove, color correction, e-commerce product editing the need for clipping path is immense to makeevery object look better. Graphics View Point has expert team member inimage Clipping path and other photo editing services. You can use our Clipping path and other photo editing services. If you like. Can you give me a "
          }
        />
        {/* Imgs */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ComparingImg before={before} after={after} />

          <ComparingImg before={before2} after={after2} />
        </div>
      </div>
    </div>
  );
};

export default ClippingpathService;
