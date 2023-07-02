import React from "react";

const Title = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-5xl font-bold text-primary dark:text-white">
            Our Services
          </h1>

          <p className="lg:max-w-[70%] text-[16px] text-justify pt-8 dark:text-white">
            We offer a wide range of professional photo editing services to
            enhance the visual appeal of your photos. Our skilled team of photo
            editors can retouch, resize, crop, color-correct, and add special
            effects to your photos to make them stand out. We also provide
            background removal, image masking, and photo restoration services.
            Contact us today to transform your photos into stunning works of
            art!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
