import React from "react";
import Head from "next/head";
import Title from "../components/pricingPage/title/title";
import ClippingPath from "../components/pricingPage/clippingPath/clippingPath";
import MultiPath from "../components/pricingPage/multiPath/multiPath";
import BackgroundRemove from "../components/pricingPage/backgroundRemove/backgroundRemove";
import ColorCorrection from "../components/pricingPage/colorCorrection/colorCorrection";
import CreateShodow from "../components/pricingPage/createShadow/createShadow";
import DropShadow from "../components/pricingPage/dropShadow/dropShadow";
import Ghost from "../components/pricingPage/ghost/ghost";
import JewelleryRetouch from "../components/pricingPage/jewelleryRetouch/jewelleryRetouch";
import NaturalShadow from "../components/pricingPage/naturalShadow/naturalShadow";
import NeckJoint from "../components/pricingPage/neckJoint/neckJoint";
import PhotoMasking from "../components/pricingPage/photoMasking/photoMasking";
import PhotoResize from "../components/pricingPage/photoResize/photoresize";
import PhotoRestoration from "../components/pricingPage/photoRestoration/photoRestoration";
import Reflection from "../components/pricingPage/reflection/reflection";
import Shadow from "../components/pricingPage/shadow/shadow";
import Retouch from "../components/pricingPage/retouch/retouch";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize/useWindowSize";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta
          property="og:title"
          name="title"
          content="Pricing Plan For Photo Editing Services | Graphics View Point"
        />
        <meta
          property="og:description"
          name="description"
          content="Get the budget friendly price for all of your image editing services.
          our rates are unbelievably affordable. We are always try to charge as minimum as possible."
        />
        <meta
          property="og:image"
          content="/assets/img/banner/GVP_Pricing_Banner.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <main className="pt-[40px]">
        <div className="text-center pt-7 md:pt-0">
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 800 : 650}
            src="/assets/img/banner/GVP_Pricing_Banner.jpg"
          />
        </div>
        <div className="py-14">
          {/* <Title /> */}
          <ClippingPath />
          <MultiPath />
          <Shadow />
          <Retouch />
          <ColorCorrection />
          <JewelleryRetouch />
          <Ghost />
          <PhotoMasking />
          <Reflection />
          <NaturalShadow />
          <PhotoRestoration />
          <NeckJoint />
          <CreateShodow />
          <BackgroundRemove />
          <DropShadow />
          <PhotoResize />
        </div>
      </main>
    </>
  );
};

export default Pricing;
