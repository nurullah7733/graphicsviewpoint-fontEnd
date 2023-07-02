import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const CreateShadow = () => {
  const before =
    "assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-01.jpg";
  const after =
    "assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-02.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-03.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-04.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Create Shadow Services"}
          description={
            "Create Shadows make your images more realistic. This type of reflection shadow makes your images attractive which has a significant impact on the online store. When Create shadow is used in product images, Then it appears as if the product is standing in a mirror and receiving the reflection. This is a simple Photoshop image editing technique that every e-commerce owner uses to enhance the look of their products, make them more attractive to customers by applying reflection shadows to photos. Graphics View Point has expert team member in image Create shadow service and other photo editing services. You can use our  Create shadow service and other photo editing services. If you like. Can you give me a "
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

export default CreateShadow;
