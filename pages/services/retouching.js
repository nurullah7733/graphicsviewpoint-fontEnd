import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-3.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-4.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching_Service_6.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching-Service_5.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching_Service_7.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching_Service_8.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching_Service_9.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Retouching/GVP_Retouching_Service_10.jpg";
let secondAfterImg7 = "/assets/img/all_services_afterbefore/Retouching/2.jpg";
let secondAfterImg8 = "/assets/img/all_services_afterbefore/Retouching/1.jpg";

const Retouching = () => {
  return (
    <>
      <Head>
        <title>Retouching</title>
        <meta
          property="og:title"
          name="title"
          content="Affordable Photo Retouching Service | Guaranteed Quality"
        />
        <meta
          property="og:description"
          name="description"
          content="At Graphics View Point you get the most affordable image Retouching
          service from highly experienced."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Retouching/Baby-Retouching-Service/Baby-Retouching-Service-02.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="text-center pt-7">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_retouching.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Photo retouching is an important part of making photos beautiful and attractive . used to improve the best quality and look of photos, creating look more professional and visually attractive. We use high techniques to remove blemishes, adjust skin tones, whiten teeth, remove wrinkles, and make other enhancements .Graphics View Point has expert team member in Photo retouching services and other photo editing services. You can use our Photo retouching service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Retouching Services Example"}
              after1={secondAfterImg1}
              before1={secondAfterImg2}
              after2={secondAfterImg3}
              before2={secondAfterImg4}
              after3={secondAfterImg5}
              before3={secondAfterImg6}
              after4={secondAfterImg7}
              before4={secondAfterImg8}
            />
          </div>
          <div className="container px-8 pb-[250px] mx-auto">
            <Pricing
              heading={"Our Retouching services Price"}
              simplePricingHeading={"Simple Retouching Service"}
              simplePricing={"$0.99 / per image"}
              mediumPricingHeading={"Medium Retouching Service"}
              mediumPricing={"$1.50 / per image"}
              complexPricingHeading={"Complex Retouching Service "}
              complexPricing={"$4.15 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Retouching;
