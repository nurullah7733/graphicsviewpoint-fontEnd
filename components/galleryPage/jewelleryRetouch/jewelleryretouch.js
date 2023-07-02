import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let Jewellery1 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-3.jpg";
let Jewellery2 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-4.jpg";
let Jewellery3 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/1.jpg";
let Jewellery4 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/2.jpg";

const JewelleryRetouch = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Jewellery Retouch services"}
        before1={Jewellery1}
        after1={Jewellery2}
        before2={Jewellery3}
        after2={Jewellery4}
      />
    </div>
  );
};

export default JewelleryRetouch;
