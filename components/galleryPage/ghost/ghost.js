import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let Ghost1 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-2.jpg";
let Ghost2 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-1.jpg";
let Ghost3 = "/assets/img/all_services_afterbefore/Ghost-mannequin/1.jpg";
let Ghost4 = "/assets/img/all_services_afterbefore/Ghost-mannequin/2.jpg";

const Ghost = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Ghost mannequin services"}
        before1={Ghost1}
        after1={Ghost2}
        before2={Ghost3}
        after2={Ghost4}
      />
    </div>
  );
};

export default Ghost;
