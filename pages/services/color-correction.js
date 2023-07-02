import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Color-Correction/GVP-Color Correction_8.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Color-Correction/GVP-Color Correction_7.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Color-Correction/GVP-Color Correction_6.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Color-Correction/GVP-Color Correction_5.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-01.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-02.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-04.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-03.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Color-Correction/2.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Color-Correction/1.jpg";

const ColorCorrection = () => {
  return (
    <>
      <Head>
        <title>Color Correction</title>
        <meta
          property="og:title"
          name="title"
          content="Color Correction Service | Guaranteed Quality"
        />
        <meta
          property="og:description"
          name="description"
          content="We provide professional  photo Color Correction services for prepress.
          We provide always best quality and charge as minimum as possible."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Color-Correction/Correction-Service-02.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="pt-8 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_color_correction.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Color correction is the system of adjustment the color of image.There are three basic aspects to photo or product color correction: first, identifying the problem; Second, selecting the appropriate tool; And third, to coordinate.Color is attractive to people. To make e-commerce products or images eye-catching to customers, the same product is available in different colors according to the client's needs.Color correction service which is the color correction of difficult retouching areas such as: Photo areas, faces, skins, objects, jewelry, products, etc. Dull, damaged, weak, old photographs require color correction where there are unwanted/flawed areas. remove or change.Graphics View Point has expert team member in image Color correction service and other photo editing services. You can use our Color correction service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Color Correction Services Example"}
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
              heading={"Our Color Correction services Price"}
              simplePricingHeading={"Simple Color correction Service"}
              simplePricing={"$1.15 / per image"}
              mediumPricingHeading={"Medium Color correction Service"}
              mediumPricing={"$1.99 / per image"}
              complexPricingHeading={"Complex Color correction Service "}
              complexPricing={"$4.00 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorCorrection;
