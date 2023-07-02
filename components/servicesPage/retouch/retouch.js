import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const Retouch = () => {
  const before =
    "assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Retouching Services"}
          description={
            "Photo retouching is an important part of making photos beautiful and attractive . used to improve the best quality and look of photos, creating look more professional and visually attractive. We use high techniques to remove blemishes, adjust skin tones, whiten teeth, remove wrinkles, and make other enhancements .Graphics View Point has expert team member in Photo retouching services and other photo editing services. You can use our Photo retouching service and other photo editing services. If you like. Can you give me a "
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

export default Retouch;
