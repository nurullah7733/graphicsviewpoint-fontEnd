import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const PhotoResize = () => {
  const before =
    "assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Photo Resize Services"}
          description={
            "Photo editing, crop, resize, and alignment and angle etc image resizing services are very useful for e-commerce business.When you take product photos at the studio, the photo may get fullness. They are need to fix positioning, zoom in or out, remove unwanted objects and distracting materials, straightening curved line, upkeep the rule of thirds, and more. photo editing and cropping increase the esthetics of product images and create attractive & customer-Based on e-Commerce photos. Get Photoshop photo editing & resizing service for boosting online business. Graphics View Point has expert team member in image resizing service and other photo editing services. You can use our resizing service and other photo editing services. If you like. Can you give me a "
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

export default PhotoResize;
