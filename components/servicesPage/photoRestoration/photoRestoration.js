import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const PhotoRestoration = () => {
  const before =
    "assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Photo Restoration Services"}
          description={
            "Photo restoration service is a technique to make images beautiful and attractive. Such as old photos, vintage photos, damaged photos, blurred photos, photos with abnormal exposures, lost pixels or any other deformity, these types of photos are improved through restoration services. Graphics View Point has expert team member in Photo restoration service and other photo editing services. You can use our Photo restoration service and other photo editing services. If you like. Can you give me a "
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

export default PhotoRestoration;
