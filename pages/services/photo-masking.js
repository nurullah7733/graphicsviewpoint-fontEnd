import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Masking/GVP-Photo_Masking_7.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Masking/GVP-Photo_Masking_8.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Masking/GVP-Photo_Masking_5.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Masking/GVP-Photo_Masking_6.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-3.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-4.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-1.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Photo-Masking/gvp-Photo-Masking-2.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Photo-Masking/1.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Photo-Masking/2.jpg";

const PhotoMasking = () => {
  return (
    <>
      <Head>
        <title>Photo Masking</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Masking Service |E-commerce Product and Model"
        />
        <meta
          property="og:description"
          name="description"
          content="Get pitch perfect edge selection no matter how fuzzy or furry your edge is because of our best quality photo masking service.We have expert photo editor."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Photo-Masking/Masking-Service-01.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[50px]">
        <div className="pt-5 text-center md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_masking.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Photo masking is a technique for removing the background from images that produce blurred edges or net meshes, such as hair, fur, or fur, known as clipping path services.By means of Photo masking we remove flying hair, torn products, fur, netting, moss trees etc. which degrade the quality of the images by means of clipping path service. Techniques to remove the background while maintaining the quality of the product in a short time through image masking services. Graphics View Point has expert team member in Photo masking service and other photo editing services. You can use our Photo masking service if you want to remove the background of your store's products such as transparent products like glasses or your model's flying hair."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Photo Masking Services Example"}
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
              heading={"Our Photo Masking services Price"}
              simplePricingHeading={"Simple Photo Masking Service"}
              simplePricing={"$0.99 / per image"}
              mediumPricingHeading={"Medium Photo Masking Service"}
              mediumPricing={"$1.50 / per image"}
              complexPricingHeading={"Complex Photo Masking Service"}
              complexPricing={"$2.50 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoMasking;
