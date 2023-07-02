import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let Multipath1 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-3.jpg";
let Multipath2 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-4.jpg";
let Multipath3 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-1.jpg";
let Multipath4 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-2.jpg";

const Multipath = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Multi path services"}
        before1={Multipath1}
        after1={Multipath2}
        before2={Multipath3}
        after2={Multipath4}
      />
    </div>
  );
};

export default Multipath;
