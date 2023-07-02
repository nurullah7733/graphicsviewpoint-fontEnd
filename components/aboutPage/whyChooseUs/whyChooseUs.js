import { ImRocket } from "react-icons/im";
import { SiQualys } from "react-icons/si";
import { MdSecurity, MdAccessTimeFilled } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-8 py-14">
      <h1 className="text-4xl  pb-8 font-bold text-center text-primary dark:text-white">
        Why Choose Us
      </h1>
      <div className="">
        <div className="grid lg:grid-cols-4 grid-cols-1 xl:gap-32 md:gap-10 gap-5  ">
          <div className="flex flex-col items-center justify-center">
            <MdAccessTimeFilled
              size={60}
              className="text-primary dark:text-white"
            />
            <h5 className="text-2xl py-2 font-semibold text-primary dark:text-white">
              Next day service
            </h5>
            <p className="text-base font-semibold text-justify">
              We offer afst and secure next day service, for exigent photo
              editing projects that you need most.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ImRocket size={50} className="text-primary dark:text-white" />
            <h5 className="text-2xl py-2  font-semibold text-primary dark:text-white">
              Instant Revisions
            </h5>
            <p className="text-base font-semibold text-justify">
              We never leave of our client's side, So you get instant correction
              of your feedback even after delivery.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <SiQualys size={50} className="text-primary dark:text-white" />
            <h5 className="text-2xl py-2  font-semibold text-primary dark:text-white">
              High Standards
            </h5>
            <p className="text-base font-semibold text-justify">
              We goal for the best premium output through our editing. So you
              get best quality for every photo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdSecurity size={60} className="text-primary dark:text-white" />
            <h5 className="text-2xl py-2  font-semibold text-primary dark:text-white">
              Guaranteed Data Secure
            </h5>
            <p className="text-base font-semibold text-justify">
              We correction follow a non-desclosure agreement to keep all your
              data and information safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
