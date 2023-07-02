import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_1.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_2.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-3.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-4.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_3.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_4.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_5.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/GVP-Photo_Resizing_6.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-1.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Photo-Resizing/gvp-Photo-Resizing-2.jpg";

const PhotoResizing = () => {
  return (
    <>
      <Head>
        <title>Photo Resizing</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Cropping and Resizing Services | Get a Quote"
        />
        <meta
          property="og:description"
          name="description"
          content="If your photos require cropping and resizing.
          We can provide you fast services.
          Our expert photo editor can fast crop and resize with best quality."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Photo-Resizing/Resizing-service-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-5 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_resiging.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Photo editing, crop, resize, and alignment and angle etc image resizing services are very useful for e-commerce business.When you take product photos at the studio, the photo may get fullness.They are need to fix positioning, zoom in or out, remove unwanted objects and distracting materials, straightening curved line, upkeep the rule of thirds, and more. photo editing and cropping increase the esthetics of product images and create attractive & customer-Based on e-Commerce photos. Get Photoshop photo editing & resizing service for boosting online business. Graphics View Point has expert team member in image resizing service and other photo editing services. You can use our resizing service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Photo Resizing Services Example"}
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
              heading={"Our Photo Resizing services Price"}
              simplePricingHeading={"Simple Photo Resizing Service"}
              simplePricing={"$0.10 / per image"}
              mediumPricingHeading={"Medium Photo Resizing Service"}
              mediumPricing={"$0.15 / per image"}
              complexPricingHeading={"Complex Photo Resizing Service"}
              complexPricing={"$0.20 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoResizing;
