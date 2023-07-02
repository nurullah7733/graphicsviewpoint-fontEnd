import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let DropShadow1 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-3.jpg";
let DropShadow2 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-4.jpg";
let DropShadow3 = "/assets/img/all_services_afterbefore/Drop-Shadow/1.jpg";
let DropShadow4 = "/assets/img/all_services_afterbefore/Drop-Shadow/2.jpg";

const DropShadow = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Drop shadow services"}
        before1={DropShadow1}
        after1={DropShadow2}
        before2={DropShadow3}
        after2={DropShadow4}
      />
    </div>
  );
};

export default DropShadow;
