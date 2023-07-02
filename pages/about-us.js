import React from "react";
import AboutImgSection from "../components/aboutPage/aboutImgSection/aboutImgSection";
import Faq from "../components/aboutPage/faq/faq";
import RequestSection from "../components/common/request/request";
import Head from "next/head";
import WhoWeAre from "../components/aboutPage/whoWeAre/whoWeAre";
import WhyChooseUs from "../components/aboutPage/whyChooseUs/whyChooseUs";
import SectionDivider from "../components/common/sectionDivider/sectionDivider";
import SkillAndQualification from "../components/aboutPage/skillAndQualification/skillAndQualification";

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          property="og:title"
          name="title"
          content="About Us | Graphics View Point Best Photo Editing Company "
        />
        <meta
          property="og:description"
          name="description"
          content="Getting your photo editing solution at an affordable price with guaranteed premium quality output."
        />
        <meta
          property="og:image"
          content="/assets/img/about_us/office_of_graphics-view-point.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[75px]">
        <AboutImgSection />
        <WhoWeAre />
        <WhyChooseUs />
        <SectionDivider text={"Get a Free Trial"} href="free-trial" />
        <SkillAndQualification />
        <Faq />
        <RequestSection />
      </div>
    </>
  );
};

export default aboutUs;
