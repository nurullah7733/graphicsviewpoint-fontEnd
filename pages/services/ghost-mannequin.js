import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_9.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_10.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_7.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_8.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-2.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-1.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_5.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/GVP-Ghost_Mannequin_6.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-3.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Ghost-mannequin/gvp-image-Ghost-Mannequin-4.jpg";

const GhostMannequin = () => {
  return (
    <>
      <Head>
        <title>Ghost Mannequin</title>
        <meta
          property="og:title"
          name="title"
          content="Invisible Ghost Mannequin Service | Clothing Product"
        />
        <meta
          property="og:description"
          name="description"
          content="Want to go for an efficient apparel product marketing then use mannequin rather than model. We have achieved satisfaction by providing this service to the client."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Ghost-Mannequin/Ghost-Mannequin-Srvice-03.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[40px]">
        <div className="text-center pt-9 md:pt-5 ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_ghost.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Ghost mannequin service is a exoteric product photography method used to create a 2D or 3D effect for clothing and apparel without the use of a human model.This method include capturing front and back images of the garment and merging them to create a incessant and realistic look.Remove the mannequin and the background, the product becomes the central point, allowing customers to get a better concept of how the clothing will look on them.Graphics View Point has expert team member in Ghost mannequin service and other photo editing services. You can use our Ghost mannequin service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Ghost Mannequin Services Example"}
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
              heading={"Our Ghost Mannequin services Price"}
              simplePricingHeading={"Simple Ghost Mannequin Service"}
              simplePricing={"$0.95 / per image"}
              mediumPricingHeading={"Medium Ghost Mannequin Service"}
              mediumPricing={"$1.30 / per image"}
              complexPricingHeading={"Complex Ghost Mannequin Service "}
              complexPricing={"$3.50 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GhostMannequin;
