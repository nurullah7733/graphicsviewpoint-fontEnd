import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const Reflection = () => {
  const before =
    "assets/img/all_services_afterbefore/Reflection/gvp-Reflection-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Reflection/gvp-Reflection-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Reflection/gvp-Reflection-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Reflection/gvp-Reflection-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Reflection Services"}
          description={
            "The reflection service makes the image more realistic and attractive thereby easily attracting the attention of the buyers. As like Product reflection, Jewellery etc. Graphics View Point has expert team member in reflection service and other photo editing services. You can use our reflection service and other photo editing services. If you like Can you give me a "
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

export default Reflection;
