import React from "react";
import FreeTrialSection from "../components/freeTrialPage/freeTrial";
import Head from "next/head";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize/useWindowSize";

const FreeTrial = () => {
  return (
    <>
      <Head>
        <title>Free Trial</title>
        <meta
          property="og:title"
          name="title"
          content="Upload Your Free Trial Images | Graphics View Point can process all formats"
        />
        <meta
          property="og:description"
          name="description"
          content="Judge our image editing services quality with free trials.
          You can send us the images via Wetransfer,Google Drive or Graphics View Point free trial website page."
        />
        <meta
          property="og:image"
          content="/assets/img/banner/GVP_Free_Trial_Banner.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[50px]">
        <div className="pt-6 text-center md:pt-5">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 800 : 650}
            src="/assets/img/banner/GVP_Free_Trial_Banner.jpg"
          />
        </div>
        <FreeTrialSection />
      </div>
    </>
  );
};

export default FreeTrial;
