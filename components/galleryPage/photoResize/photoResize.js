import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let photoresize1 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-3.jpg";
let photoresize2 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-4.jpg";
let photoresize3 = "/assets/img/all_services_afterbefore/Photo-Resizing/1.jpg";
let photoresize4 = "/assets/img/all_services_afterbefore/Photo-Resizing/2.jpg";

const PhotoResize = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Photo resize services"}
        before1={photoresize1}
        after1={photoresize2}
        before2={photoresize3}
        after2={photoresize4}
      />
    </div>
  );
};

export default PhotoResize;
