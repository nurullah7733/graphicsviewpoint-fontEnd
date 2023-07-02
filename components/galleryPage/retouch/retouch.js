import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let retouch1 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-1.jpg";
let retouch2 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-2.jpg";
let retouch3 = "/assets/img/all_services_afterbefore/Retouching/1.jpg";
let retouch4 = "/assets/img/all_services_afterbefore/Retouching/2.jpg";

let backgroundRemove1 =
  "/assets/img/all_services_afterbefore/Background-remove/1.jpg";
let backgroundRemove2 =
  "/assets/img/all_services_afterbefore/Background-remove/2.jpg";
let backgroundRemove3 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-3.jpg";
let backgroundRemove4 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-4.jpg";

const Retouch = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Retouching services"}
        before1={retouch1}
        after1={retouch2}
        before2={retouch3}
        after2={retouch4}
      />
    </div>
  );
};

export default Retouch;
