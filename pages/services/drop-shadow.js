import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_1.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_2.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_5.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_6.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-2.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-1.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-3.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/gvp-Drop-Shadow-4.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_3.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Drop-Shadow/GVP-Drop_Shadow_4.jpg";

const DropShadow = () => {
  return (
    <>
      <Head>
        <title>Drop Shadow</title>
        <meta
          property="og:title"
          name="title"
          content="Drop Shadow Service |  Best Quality  We Provide 24 Hours Service"
        />
        <meta
          property="og:description"
          name="description"
          content="Want to have Natural or realistic shadow in your photos.
          Get will all kinds of shadow services here. As like
          Reflection Shadow | Natural Shadow | Create Shadow."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Shadow/Drop-Shadow-Service/Drop-Shadow-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_drop_shadow.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Drop Shadow Effect is Photoshop for creating shadows. drop shadows can be created using Photoshop layer blending option.By cleaning up the background of the product using clipping paths or image masking, enhance the photo with a 3D look by applying natural shadows to the lower part of the background surface during photography. Product quality is greatly increased. Product variety services are tailored for use in various media including websites, e-commerce sites, product catalogs, brochures, digital media ads, print media and magazine ads, etc. As a result, the product attracts buyers. Graphics View Point has expert team member in image Drop Shadow service and other photo editing services. You can use our Drop Shadow service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Drop Shadow Services Example"}
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
              heading={"Our Drop Shadow services Price"}
              simplePricingHeading={"Simple Drop Shadow Service"}
              simplePricing={"$0.70 / per image"}
              mediumPricingHeading={"Medium Drop Shadow Service"}
              mediumPricing={"$1.30 / per image"}
              complexPricingHeading={"Complex Drop Shadow Service"}
              complexPricing={"$2.75 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropShadow;
