import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_6.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_5.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-1.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-2.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_7.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_8.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_9.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Shadow/GVP_Shodow_Service_10.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-3.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-4.jpg";

const Shadow = () => {
  return (
    <>
      <Head>
        <title>Shadow</title>
        <meta
          property="og:title"
          name="title"
          content="Shadow Service | E-commerce Product"
        />
        <meta
          property="og:description"
          name="description"
          content="Want to have Natural shadow in your photos. 
          Get will all kinds of shadow services here. As like
          Create Shadow, Natural Shadow, Drop Shadow."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Shadow/Natural-Shadow-Service/Natural-Shadow-02.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="text-center pt-7">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_shadow.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Shadow Service is one of the of great importance image editing service for product showing. Everything in the world has a shadow and so does the product. There are products of various items whose product layout does not look unusual and attractive. By adding original view shadows to such photos, the product is made attractive. Drop Shadow, Natural Shadow, Reflection Shadow. Create Shadow. Graphics View Point has expert team member in image Shadow service and other photo editing services. You can use our Shadow service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Shadow Services Example"}
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
              heading={"Our Shadow services Price"}
              simplePricingHeading={"Simple Shadow Service"}
              simplePricing={"$0.75 / per image"}
              mediumPricingHeading={"Medium Shadow Service"}
              mediumPricing={"$1.90 / per image"}
              complexPricingHeading={"Complex Shadow Service "}
              complexPricing={"$3.50 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shadow;
