import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const JewelleryRetouch = () => {
  const before =
    "assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Jewellery Retouch Services"}
          description={
            "Jewellery retouching service is a technique to make images beautiful and attractive. Jewelry retouching makes the photo  beautiful thereby easily attracting the attention of buyers. And presents the precious gemstones in the most attractive way.Necklace, earring, ring and other jewelry will shine after photoshopping. Graphics View Point has expert team member in Jewellery retouching service and other photo editing services. You can use our Jewellery retouching service and other photo editing services. If you like. Can you give me a "
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

export default JewelleryRetouch;
