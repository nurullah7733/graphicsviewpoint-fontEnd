import React from "react";
import Image from "next/image";

const AboutImgSection = () => {
  return (
    <div className="container px-4 mx-auto py-14">
      <div className="flex flex-col items-center px-4">
        <Image
          src={"/assets/img/about_us/office_of_graphics-view-point.jpg"}
          width={1200}
          height={550}
          alt="Graphics view point Office Picture"
        />
        <p className="max-w-[1200px] text-base font-semibold text-justify dark:text-white">
          Graphics View Point is a professional post-production photo editing
          company. It is basically an outsourcing company. Photo editing service
          is prodvided by this company. Graphics View Point is situated at the
          city of Dinajpur In Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default AboutImgSection;
