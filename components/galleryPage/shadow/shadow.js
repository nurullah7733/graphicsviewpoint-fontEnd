import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let shadowImg1 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-3.jpg";
let shadowImg2 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-4.jpg";
let shadowImg3 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-1.jpg";
let shadowImg4 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-2.jpg";

const Shadow = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Shadow services"}
        before1={shadowImg1}
        after1={shadowImg2}
        before2={shadowImg3}
        after2={shadowImg4}
      />
    </div>
  );
};

export default Shadow;
