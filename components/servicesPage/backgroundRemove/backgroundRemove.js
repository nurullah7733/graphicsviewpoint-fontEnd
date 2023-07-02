import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const BackgroundRemoveService = () => {
  const before =
    "assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Background Remove Services"}
          description={
            "Background remove service is the process of replacing the photo with a different background, leaving an photo intact. This is usually done using manual endeavor and the Photoshop pen tool. As like e-commerce businesses and retailers, having best-quality product photos with the right background is important. The choice of background will trust on the sales channels, with online marketplaces usually need product photos to have a white background. However, for selling on their own online shops, color backgrounds that serial with the brand's colors may be more feasible at attracting customers. Graphics View Point has expert team member in image Background remove service and other photo editing services. You can use our  Background remove service and other photo editing services. If you like. Can you give me a "
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

export default BackgroundRemoveService;
