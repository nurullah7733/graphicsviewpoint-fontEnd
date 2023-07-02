import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi_path_5.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi_path_6.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi-Path-Service-02.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi-Path-Service-01.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi_path_7.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Multi-path/GVP_Multi_path_8.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-2.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-1.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-3.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Multi-path/gvp-service-image-Multipath-4.jpg";

const MultiPath = () => {
  return (
    <>
      <Head>
        <title>Multi Path</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Multi-Path Service | You Can Trust | We provide 100% Quality"
        />
        <meta
          property="og:description"
          name="description"
          content="Want to bring your products and photo to life. 
          Our photo editor  experts can help. Find out more about our."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Multi-path/Multipath-Service-01.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/multipath.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Multi-Path is an advanced system used to Isolate several parts of an photo into multiple layers, active color correction and manipulation of separate materials. Graphics View Point has expert team member in multi-path services and other photo editing services. You can use our Multi-Path service and other photo editing service."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Multi Path Services Example"}
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
              heading={"Our Multi Path services Price"}
              simplePricingHeading={"Simple Multi Path Service"}
              simplePricing={"$0.99 / per image"}
              mediumPricingHeading={"Medium Multi Path Service"}
              mediumPricing={"$1.75 / per image"}
              complexPricingHeading={"Complex Multi Path Service"}
              complexPricing={"$4.10 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiPath;
