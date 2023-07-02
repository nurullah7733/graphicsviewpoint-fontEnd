import React from "react";
import TitleAndGallery from "../../common/titleAndGallery/titleAndGallery";

let reflection1 = "/assets/img/all_services_afterbefore/Reflection/1.jpg";
let reflection2 = "/assets/img/all_services_afterbefore/Reflection/2.jpg";
let reflection3 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-1.jpg";
let reflection4 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-2.jpg";

const Reflection = () => {
  return (
    <div>
      <TitleAndGallery
        title={"Reflection services"}
        before1={reflection1}
        after1={reflection2}
        before2={reflection3}
        after2={reflection4}
      />
    </div>
  );
};

export default Reflection;
