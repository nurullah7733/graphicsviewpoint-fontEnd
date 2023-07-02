import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const Shadow = () => {
  const before = "assets/img/all_services_afterbefore/Shadow/gvp-Shadow-1.jpg";
  const after = "assets/img/all_services_afterbefore/Shadow/gvp-Shadow-2.jpg";
  const before2 = "assets/img/all_services_afterbefore/Shadow/gvp-Shadow-3.jpg";
  const after2 = "assets/img/all_services_afterbefore/Shadow/gvp-Shadow-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Shadow Services"}
          description={
            "Shadow Service is one of the of great importance image editing service for product showing. Everything in the world has a shadow and so does the product. There are products of various items whose product layout does not look unusual and attractive. By adding original view shadows to such photos, the product is made attractive. Drop Shadow, Natural Shadow, Reflection Shadow. Create Shadow. Graphics View Point has expert team member in image Shadow service and other photo editing services. You can use our Shadow service and other photo editing services. If you like Can you give me a "
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

export default Shadow;
