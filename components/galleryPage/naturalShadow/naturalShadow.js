import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let natural1 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-1.jpg";
let natural2 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-2.jpg";
let natural3 = "/assets/img/all_services_afterbefore/Natural-Shadow/1.jpg";
let natural4 = "/assets/img/all_services_afterbefore/Natural-Shadow/2.jpg";

const NaturalShadow = () => {
  return (
    <div>
      <TitleAndGallery
        title={"natural shadow services"}
        before1={natural1}
        after1={natural2}
        before2={natural3}
        after2={natural4}
      />
    </div>
  );
};

export default NaturalShadow;
