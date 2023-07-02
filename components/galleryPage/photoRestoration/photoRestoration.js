import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let restoration1 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-2.jpg";
let restoration2 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-1.jpg";
let restoration3 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/1.jpg";
let restoration4 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/2.jpg";

const PhotoRestoration = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Photo Restoration services"}
        before1={restoration1}
        after1={restoration2}
        before2={restoration3}
        after2={restoration4}
      />
    </div>
  );
};

export default PhotoRestoration;
