import React from "react";
import FormSection from "../components/contactPage/form/form";
import MapSection from "../components/contactPage/map/map";
import RequestSection from "../components/common/request/request";
import Head from "next/head";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize/useWindowSize";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          property="og:title"
          name="title"
          content="Contact Us |Graphics View Point "
        />
        <meta
          property="og:description"
          name="description"
          content="If you have any question and would like to contact us.
          Please feel free to instantly E-mail: info@graphicsviewpoint.com 
          or Skype: graphicsviewpoint24@gmail.com"
        />
        <meta
          property="og:image"
          content="/assets/img/banner/GVP_Contact_Banner.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[40px]">
        <div className="text-center pt-7 md:pt-0">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 900 : 800}
            src="/assets/img/banner/GVP_Contact_Banner.jpg"
          />
        </div>
        <FormSection />
        <MapSection />
        <RequestSection />
      </div>
    </>
  );
};

export default contact;
