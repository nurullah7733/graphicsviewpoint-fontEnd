import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_8.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_7.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_5.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_6.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path1.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path2.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path3.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Clipping-path/gvp-service-image-Clipping-Path4.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_9.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Clipping-path/GVP-Clipping_Path_10.jpg";

const ClippingPath = () => {
  return (
    <>
      <Head>
        <title>Clipping Path</title>
        <meta
          property="og:title"
          name="title"
          content="Best Clipping Path Service You Can Trust | Get a Quote"
        />
        <meta
          property="og:description"
          name="description"
          content="Get professional and reliable clipping path services now.
          We work on your image editing requests and provide best quality."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Clipping-Path/Clipping-Path-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_clipping_path.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Clipping Path is the background remove way from in image. Simply put,clipping path separates the background from the image. Clipping path isthe stylish way to remove the background of the original object which isdone with pen tool. There are many Ecommerce companies in different countries. online shops, magazine design, web design, print publishing assiduity, online product stores, journals and many other fields including are used Clipping path. As like- Background remove service,Cutout Service, color correction service, Multi path, Color pathservice, etc. Photographers are use clipping path way for e-commerce product editing. For example, background remove, color correction, e-commerce product editing the need for clipping path is immense to makeevery object look better. Graphics View Point has expert team member inimage Clipping path and other photo editing services. You can use our Clipping path and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Clipping Path Services Example"}
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
              heading={"Our Clipping Path services Price"}
              simplePricingHeading={"Simple Clipping Path Service"}
              simplePricing={"$0.50 / per image"}
              mediumPricingHeading={"Medium Clipping Path Service"}
              mediumPricing={"$0.75 / per image"}
              complexPricingHeading={"Complex Clipping Path Service"}
              complexPricing={"$3.99 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClippingPath;
