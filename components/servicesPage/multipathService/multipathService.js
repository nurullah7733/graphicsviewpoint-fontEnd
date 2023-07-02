import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const MultiPathService = () => {
  const before =
    "assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-2.jpg";
  const after =
    "assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-1.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Multi Path Services"}
          description={
            "Multi-Path is an advanced system used to Isolate several parts of an photo into multiple layers, active color correction and manipulation of separate materials. Graphics View Point has expert team member in multi-path services and other photo editing services. You can use our Multi-Path service and other photo editing service. If you like. Can you give me a "
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

export default MultiPathService;
