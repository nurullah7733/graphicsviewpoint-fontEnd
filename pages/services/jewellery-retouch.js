import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/GVP_Jewellery_7.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/GVP_Jewellery_8.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-3.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-4.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/1.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/2.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-1.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/gvp-Jewellery-retouching-2.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/GVP_Jewellery_6.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Jewellery-retouching/GVP_Jewellery_5.jpg";

const JewelleryRetouch = () => {
  return (
    <>
      <Head>
        <title>Jewellery Retouch</title>
        <meta
          property="og:title"
          name="title"
          content="Jewellery Retouching Service | Make your Jewellery Shine and Realistic"
        />
        <meta
          property="og:description"
          name="description"
          content="If you need to change background, add shine or realistic.
          Remove dust scratches and color tone from your necklaces, rings and jewellery product. Then we have expert photo editors. Get in touch with our."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/jewellery-retouch/gvp--Jewellery-retouching-Service-02.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_juwellery.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Jewellery retouching service is a technique to make images beautiful and attractive. Jewelry retouching makes the photo beautiful thereby easily attracting the attention of buyers. And presents the precious gemstones in the most attractive way.Necklace, earring, ring and other jewelry will shine after photoshopping. Graphics View Point has expert team member in Jewellery retouching service and other photo editing services. You can use our Jewellery retouching service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Jewellery Retouch Services Example"}
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
              heading={"Our Jewellery Retouch services Price"}
              simplePricingHeading={"Simple Jewellery Retouch Service"}
              simplePricing={"$1.50 / per image"}
              mediumPricingHeading={"Medium Jewellery Retouch Service"}
              mediumPricing={"$2.10 / per image"}
              complexPricingHeading={"Complex Jewellery Retouch Service "}
              complexPricing={"$4.50 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JewelleryRetouch;
