import { AiOutlineBorderlessTable } from "react-icons/ai";
import Btn from "../../common/btn/btn";

const Pricing = ({
  heading,
  simplePricingHeading,
  simplePricing,
  mediumPricingHeading,
  mediumPricing,
  complexPricingHeading,
  complexPricing,
}) => {
  return (
    <div className="relative">
      <h1 className=" mb-36 md:mb-20 title">{heading}</h1>
      <div className="flex justify-center w-full center">
        <div>
          {/*  */}
          <div className="flex md:mt-[195px] mt-[150px] ">
            <AiOutlineBorderlessTable className="mt-2 mr-1 text-lg text-primary dark:text-white" />
            <div className="mb-5">
              <h3 className="text-lg font-bold md:text-xl text-primary dark:text-white">
                {simplePricingHeading}
              </h3>
              <p className="text-sm font-bold text-left md:text-base">
                {simplePricing}
              </p>
            </div>
          </div>

          <div className="flex ">
            <AiOutlineBorderlessTable className="mt-2 mr-1 text-lg text-primary dark:text-white" />
            <div className="mb-5">
              <h3 className="text-lg font-bold md:text-xl text-primary dark:text-white">
                {mediumPricingHeading}
              </h3>
              <p className="text-sm font-bold text-left md:text-base">
                {mediumPricing}
              </p>
            </div>
          </div>

          <div className="flex mb-7 ">
            <AiOutlineBorderlessTable className="mt-2 mr-1 text-lg text-primary dark:text-white" />
            <div>
              <h3 className="text-lg font-bold md:text-xl text-primary dark:text-white">
                {complexPricingHeading}
              </h3>
              <p className="text-sm font-bold text-left md:text-base">
                {complexPricing}
              </p>
            </div>
          </div>
          <div className="text-center">
            <Btn btnHref={"free-trial"} btnText={"Free Trial"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
