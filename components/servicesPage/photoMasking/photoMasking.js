import React from "react";
import ServiceSection from "../../common/serviceSection/serviceSection";
import ComparingImg from "../../common/comparingImg/comparingImg";

const PhotoMasking = () => {
  const before =
    "assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-1.jpg";
  const after =
    "assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-2.jpg";
  const before2 =
    "assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-3.jpg";
  const after2 =
    "assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-4.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <ServiceSection
          header={"Photo Masking Services"}
          description={
            "Photo masking is a technique for removing the background from images that produce blurred edges or net meshes, such as hair, fur, or fur, known as clipping path services.By means of Photo masking we remove flying hair, torn products, fur, netting, moss trees etc. which degrade the quality of the images by means of clipping path service. Techniques to remove the background while maintaining the quality of the product in a short time through image masking services. Graphics View Point has expert team member in Photo masking service and other photo editing services. You can use our Photo masking service if you want to remove the background of your store's products such as transparent products like glasses or your model's flying hair. If you like. Can you give me a "
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

export default PhotoMasking;
