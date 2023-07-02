import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const ColorCorrection = () => {
  const before =
    "assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-01.jpg";
  const after =
    "assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-02.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-03.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-04.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Color Correction Services"}
          description={
            "Color correction is the system of adjustment the color of image. There are three basic aspects to photo or product color correction: first, identifying the problem; Second, selecting the appropriate tool; And third, to coordinate.Color is attractive to people. To make e-commerce products or images eye-catching to customers, the same product is available in different colors according to the client's needs.Color correction service which is the color correction of difficult retouching areas such as: Photo areas, faces, skins, objects, jewelry, products, etc. Dull, damaged, weak, old photographs require color correction where there are unwanted/flawed areas. remove or change.Graphics View Point has expert team member in image Color correction service and other photo editing services. You can use our Color correction service and other photo editing services. If you like. Can you give me a "
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

export default ColorCorrection;
