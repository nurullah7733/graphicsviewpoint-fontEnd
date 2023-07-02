import Image from "next/image";
import OnlyImgSample from "../../components/allServicesPage/onlyImgSample/onlyImgSample";
import Pricing from "../../components/allServicesPage/pricing/pricing";
import TextWithImg from "../../components/allServicesPage/textWithImg/textWithImg";
import SectionDivider from "../../components/common/sectionDivider/sectionDivider";
import Head from "next/head";
import { useWindowSize } from "../../utils/windowSize/useWindowSize";

let firsttAfterImg1 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_1.jpg";
let firsttAfterImg2 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_2.jpg";

let secondAfterImg1 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-1.jpg";
let secondAfterImg2 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-2.jpg";
let secondAfterImg3 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_3.jpg";
let secondAfterImg4 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_4.jpg";
let secondAfterImg5 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-3.jpg";
let secondAfterImg6 =
  "/assets/img/all_services_afterbefore/Neck-joint/gvp-neck-joint-4.jpg";
let secondAfterImg7 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_5.jpg";
let secondAfterImg8 =
  "/assets/img/all_services_afterbefore/Neck-joint/GVP-Neck_Joint_6.jpg";

const NeckJoint = () => {
  return (
    <>
      <Head>
        <title>Nick Joint</title>
        <meta
          property="og:title"
          name="title"
          content="Nick Joint Service |  E-commerce Clothing Product"
        />
        <meta
          property="og:description"
          name="description"
          content="Find you professional neck joint service provider.
          Want to go for an efficient apparel product marketing .
          Get will  here guaranteed quality neck joint service.
          We have achieved satisfaction by providing this service to the client."
        />
        <meta
          property="og:image"
          content="/assets/img/all_Services/Neck-Joint/Neck-Joint-Service-01.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[65px]">
        <div className="md:pt-1.5 pt-2.5  text-center ">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_jeck-joint.jpg"
          />
        </div>
        <div>
          <div className="container px-8 mx-auto py-14">
            <TextWithImg
              after={firsttAfterImg2}
              before={firsttAfterImg1}
              text={
                "Photographing live models for your product photography is expensive and time consuming. Mannequins are a wise one-time investment.If you don't want to include mannequins in your product photographs, we need a neck joint or ghost mannequin service.Because it's cheaper to hire a photo editor than get a model for your product photographyNeck Joint service is especially used on garment items. A product or image consists of two or three parts. The neck section is made by joining the inner parts of the image so that the entire image can be seen . Graphics View Point has expert team member in Neck joint service and other photo editing services. You can use our Neck joint service and other photo editing services."
              }
            />
          </div>
          <div>
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <div className="container px-8 mx-auto py-14">
            <OnlyImgSample
              heading={"Neck Joint Services Example"}
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
              heading={"Our Neck Joint services Price"}
              simplePricingHeading={"Simple Neck Joint Service"}
              simplePricing={"$0.90 / per image"}
              mediumPricingHeading={"Medium Neck Joint Service"}
              mediumPricing={"$1.25 / per image"}
              complexPricingHeading={"Complex Neck Joint Service"}
              complexPricing={"$2.99 / per image"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NeckJoint;
