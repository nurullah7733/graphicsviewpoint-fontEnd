import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_9.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_10.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_5.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_6.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_7.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/GVP-Natural_8.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-1.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-2.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-3.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Natural-Shadow/gvp-natural-shadow-4.jpg";

const NaturalShadow = () => {
  return (
    <>
      <Head>
        <title>Natural Shadow</title>
        <meta
          property="og:title"
          name="title"
          content="Natural Shadow Service |  Best Quality And We Provide  charge as minimum as possible"
        />
        <meta
          property="og:description"
          name="description"
          content="Makes the product attractive for shadows. That's why to it easily attracts clients.
          We provide natural shadow services by Photoshop expert editors.
          Here you should consider us for high quality services."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Shadow/Natural-Shadow-Service/Natural-Shadow-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_natural.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "The Natural shadow of the product created by different lighting during the photograph, is called natural shadow.And some customers want to retain shadows or give best shadows and 3D look to their images. So, background remove in the image, We retain the natural shadows unchanged and create soft shadows. Product natural shadow service can be used for many media including websites E-commerce websites, product catalogs, banner, digital media ads, and magazine ads etc. Graphics View Point has expert team member in image Natural shadow service and other photo editing services. You can use our Natural shadow service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Natural Shadow Services Example"}
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
              heading={"Our Natural Shadow services Price"}
              simplePricingHeading={"Simple Natural Shadow Service"}
              simplePricing={"$0.75 / per image"}
              mediumPricingHeading={"Medium Natural Shadow Service"}
              mediumPricing={"$1.50 / per image"}
              complexPricingHeading={"Complex Natural Shadow Service"}
              complexPricing={"$2.70 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NaturalShadow;
