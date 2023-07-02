import React from "react";
import ComparingImg from "../../common/comparingImg/comparingImg";

const CompareImg = () => {
  const before = "/assets/img/all_Services/Graphics_View_Point_Images_1.jpg";
  const after = "/assets/img/all_Services/Graphics_View_Point_Images_2.jpg";

  return (
    <div className="container px-4 mx-auto py-14 ">
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2">
        <div className="max-w-3xl ">
          <ComparingImg before={before} after={after} />
        </div>
        <div>
          <h1 className="pt-12 pb-12 title lg:pt-0 ">
            Combine Your Creativity With Us
          </h1>
          <p className="lg:px-5 px-0 text-[16px] text-justify dark:text-white">
            Graphics View Point is a photo editing service providing
            organization. Now photo editing service has become an important part
            of every day. Because products are made attractive through editing.
            It easily attracts customers. Editing of photos of products or any
            object on e-commerce websites is done to make them more attractive.
            Graphics View Point team work on the requirement of our clients with
            100% quality. We have a team of experience photo editors who provide
            24 hours services with very much skill. We have some expert quality
            controller who checks quality of works. At last our production
            manager makes sure of 100% quality is there or not. After that when
            we become sure of 100% quality of the work done then we do deliver
            the jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompareImg;
