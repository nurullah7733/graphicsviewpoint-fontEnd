import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const Ghost = () => {
  const before =
    "assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-2.jpg";
  const after =
    "assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-1.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Ghost Mannequin Services"}
          description={
            "Ghost mannequin service is a exoteric product photography method used to create a 2D or 3D effect for clothing and apparel without the use of a human model. This method include capturing front and back images of the garment and merging them to create a incessant and realistic look. Remove the mannequin and the background, the product becomes the central point, allowing customers to get a better concept of how the clothing will look on them.Graphics View Point has expert team member in Ghost mannequin service and other photo editing services. You can use our Ghost mannequin service and other photo editing services. If you like .Can you give me a "
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

export default Ghost;
