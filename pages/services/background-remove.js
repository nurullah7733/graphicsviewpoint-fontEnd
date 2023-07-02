import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_3.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_4.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-3.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-4.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_1.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_2.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_5.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_6.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-1.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Background-remove/gvp-background-Remove-2.jpg";

const BackgroundRemove = () => {
  return (
    <>
      <Head>
        <title>Background Remove</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Background Removal Service | Get A Cut-Out Image"
        />
        <meta
          property="og:description"
          name="description"
          content="Remove unwanted background or objects from your 
          photo. We provide always best quality and charge as minimum as possible."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Background-Remove/Background-Remove.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[65px]">
        <div className="pt-2 text-center md:pt-0 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_background_remove.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Background remove service is the process of replacing the photo with a different background, leaving an photo intact.This is usually done using manual endeavor and the Photoshop pen tool. As like e-commerce businesses and retailers, having best-quality product photos with the right background is important.The choice of background will trust on the sales channels, with online marketplaces usually need product photos to have a white background. However, for selling on their own online shops, color backgrounds that serial with the brand's colors may be more feasible at attracting customers.Graphics View Point has expert team member in image Background remove service and other photo editing services. You can use our Background remove service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Background Remove Services Example"}
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
              heading={"Our Background Remove services Price"}
              simplePricingHeading={"Simple Background Remove Service"}
              simplePricing={"$0.60 / per image"}
              mediumPricingHeading={"Medium Background Remove Service"}
              mediumPricing={"$0.99 / per image"}
              complexPricingHeading={"Complex Background Remove Service"}
              complexPricing={"$4.10 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundRemove;
