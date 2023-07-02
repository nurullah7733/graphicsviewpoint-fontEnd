import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let createShadow1 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-03.jpg";
let createShadow2 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-04.jpg";
let createShadow3 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP_Create-Shadow-Service2.jpg";
let createShadow4 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP_Create-Shadow-Service1.jpg";

const CreateShadow = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Create shadow services"}
        before1={createShadow1}
        after1={createShadow2}
        before2={createShadow3}
        after2={createShadow4}
      />
    </div>
  );
};

export default CreateShadow;
