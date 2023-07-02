import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_5.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_6.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_7.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_8.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-3.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-4.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-1.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-2.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_9.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_10.jpg";

const Reflection = () => {
  return (
    <>
      <Head>
        <title>Reflection</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Reflection Service | Mirror Effect for Product Photo"
        />
        <meta
          property="og:description"
          name="description"
          content="Looking for product reflection shadow services. 
          Here  you should consider us for high-end quality services.
          We provide 100% secured file transfer and on time job delivery."
        />
        <meta
          property="og:image"
          content="/assets/img/all_services_afterbefore/Reflection/GVP_Reflection_6.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="text-center pt-7">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_reflection.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "The reflection service makes the image more realistic and attractive thereby easily attracting the attention of the buyers. As like Product reflection, Jewellery etc. Graphics View Point has expert team member in reflection service and other photo editing services. You can use our reflection service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Reflection Services Example"}
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
              heading={"Our Reflection services Price"}
              simplePricingHeading={"Simple Reflection Service"}
              simplePricing={"$0.90 / per image"}
              mediumPricingHeading={"Medium Reflection Service"}
              mediumPricing={"$1.45 / per image"}
              complexPricingHeading={"Complex Reflection Service "}
              complexPricing={"$3.50 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflection;
