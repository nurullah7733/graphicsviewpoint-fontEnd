import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let neckjoint1 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-1.jpg";
let neckjoint2 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-2.jpg";
let neckjoint3 = "/assets/img/all_services_afterbefore/Neck-joint/1.jpg";
let neckjoint4 = "/assets/img/all_services_afterbefore/Neck-joint/2.jpg";

const Neckjoint = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Neck joint services"}
        before1={neckjoint1}
        after1={neckjoint2}
        before2={neckjoint3}
        after2={neckjoint4}
      />
    </div>
  );
};

export default Neckjoint;
