import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const NaturalShadow = () => {
  const before =
    "assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Natural Shadow Services"}
          description={
            "The Natural shadow of the product created by different lighting during the photograph, is called natural shadow. And some customers want to retain shadows or give best shadows and 3D look to their images. So, background remove in the image, We retain the natural shadows unchanged and create soft shadows. Product natural shadow service can be used for many media including websites E-commerce websites, product catalogs, banner, digital media ads, and magazine ads etc. Graphics View Point has expert team member in image Natural shadow service and other photo editing services. You can use our Natural shadow service and other photo editing services. If you like. Can you give me a "
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

export default NaturalShadow;
