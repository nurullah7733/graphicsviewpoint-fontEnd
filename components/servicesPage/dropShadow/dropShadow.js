import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const DropShadow = () => {
  const before =
    "assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-2.jpg";
  const after =
    "assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-1.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Drop Shadow Services"}
          description={
            "Drop Shadow Effect is Photoshop for creating shadows. drop shadows can be created using Photoshop layer blending option. By cleaning up the background of the product using clipping paths or image masking, enhance the photo with a 3D look by applying natural shadows to the lower part of the background surface during photography. Product quality is greatly increased. Product variety services are tailored for use in various media including websites, e-commerce sites, product catalogs, brochures, digital media ads, print media and magazine ads, etc. As a result, the product attracts buyers. Graphics View Point has expert team member in image Drop Shadow service and other photo editing services. You can use our  Drop Shadow service and other photo editing services. If you like. Can you give me a "
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

export default DropShadow;
