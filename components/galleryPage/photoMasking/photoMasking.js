import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let masking1 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-3.jpg";
let masking2 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-4.jpg";
let masking3 = "/assets/img/all_services_afterbefore/Photo-Masking/1.jpg";
let masking4 = "/assets/img/all_services_afterbefore/Photo-Masking/2.jpg";

const PhotoMasking = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Photo masking services"}
        before1={masking1}
        after1={masking2}
        before2={masking3}
        after2={masking4}
      />
    </div>
  );
};

export default PhotoMasking;
