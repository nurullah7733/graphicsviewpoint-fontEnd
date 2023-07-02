import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const NeckJoint = () => {
  const before =
    "assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Neck Joint Services"}
          description={
            "Photographing live models for your product photography is expensive and time consuming. Mannequins are a wise one-time investment. If you don't want to include mannequins in your product photographs, we need a neck joint or ghost mannequin service. Because it's cheaper to hire a photo editor than get a model for your product photographyNeck Joint service is especially used on garment items. A product or image consists of two or three parts. The neck section is made by joining the inner parts of the image so that the entire image can be seen. Graphics View Point has expert team member in Neck joint service and other photo editing services. You can use our Neck joint service and other photo editing services.  If you like. Can you give me a "
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

export default NeckJoint;
