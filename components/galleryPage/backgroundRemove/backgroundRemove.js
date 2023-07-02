import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let backgroundRemove1 =
  "/assets/img/all_services_afterbefore/Background-remove/1.jpg";
let backgroundRemove2 =
  "/assets/img/all_services_afterbefore/Background-remove/2.jpg";
let backgroundRemove3 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-3.jpg";
let backgroundRemove4 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-4.jpg";

const BackgroundRemove = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Background remove services"}
        before1={backgroundRemove1}
        after1={backgroundRemove2}
        before2={backgroundRemove3}
        after2={backgroundRemove4}
      />
    </div>
  );
};

export default BackgroundRemove;
