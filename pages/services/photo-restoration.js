import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/GVP-Photo_restoration_7.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/GVP-Photo_restoration_8.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/GVP-Photo_restoration_5.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/GVP-Photo_restoration_6.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-3.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-4.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-1.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/gvp-Photo-restoration-2.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/1.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Photo-Restoration/2.jpg";

const PhotoRestoration = () => {
  return (
    <>
      <Head>
        <title>Photo Restoration</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Restoration Service | We  Restore Damaged Images Fast"
        />
        <meta
          property="og:description"
          name="description"
          content="Need repair your old photos, colorize black and white
          images or restore widely damaged photos.
          We provide always best quality and charge as minimum as possible."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Photo-restoration/restoration-Service-01.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[70px]">
        <div className="pt-1.5 text-center md:pt-0">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_restoration.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Photo restoration service is a technique to make images beautiful and attractive. Such as old photos, vintage photos, damaged photos, blurred photos, photos with abnormal exposures, lost pixels or any other deformity, these types of photos are improved through restoration services. Graphics View Point has expert team member in Photo restoration service and other photo editing services. You can use our Photo restoration service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Photo Restoration Services Example"}
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
              heading={"Our Photo Restoration services Price"}
              simplePricingHeading={"Simple Photo Restoration Service"}
              simplePricing={"$2.10 / per image"}
              mediumPricingHeading={"Medium Photo Restoration Service"}
              mediumPricing={"$2.95 / per image"}
              complexPricingHeading={"Complex Photo Restoration Service"}
              complexPricing={"$4.99 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoRestoration;
