import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-5.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-6.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-7.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-8.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-02.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-01.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-9.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Create-Shadow/GVP-create-shadow-10.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-03.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Create-Shadow/gvp-image-Create-Shadow-04.jpg";

const CreateShadow = () => {
  return (
    <>
      <Head>
        <title>Create Shadow</title>
        <meta
          property="og:title"
          name="title"
          content="Create Shadow Service | E-commerce  Product We Provide Guaranteed Quality And On Time Delivery"
        />
        <meta
          property="og:description"
          name="description"
          content="Photo create shadow service makes your product photo authentic and trustworthy. That's why to it easily attracts clients. We do shadow create by expert editors.
          Get will all kinds of shadow services here."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Shadow/Create-Shadow-Service/Create-Shadow-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_create_shadow.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Create Shadows make your images more realistic. This type of reflection shadow makes your images attractive which has a significant impact on the online store. When Create shadow is used in product images,Then it appears as if the product is standing in a mirror and receiving the reflection.This is a simple Photoshop image editing technique that every e-commerce owner uses to enhance the look of their products, make them more attractive to customers by applying reflection shadows to photos. Graphics View Point has expert team member in image Create shadow service and other photo editing services. You can use our Create shadow service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Create Shadow Services Example"}
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
              heading={"Our Create Shadow services Price"}
              simplePricingHeading={"Simple Create Shadow Service"}
              simplePricing={"$0.90 / per image"}
              mediumPricingHeading={"Medium Create Shadow Service"}
              mediumPricing={"$1.55 / per image"}
              complexPricingHeading={"Complex Create Shadow Service"}
              complexPricing={"$3.10 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShadow;
