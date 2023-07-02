import Head from "next/head";
import React from "react";
import Title from "../components/servicesPage/title/title";
import ClippingpathService from "../components/servicesPage/clippingpathService/clippingpathService";
import MultiPathService from "../components/servicesPage/multipathService/multipathService";
import BackgroundRemoveService from "../components/servicesPage/backgroundRemove/backgroundRemove";
import ColorCorrection from "../components/servicesPage/colorCorrection/colorCorrection";
import CreateShadow from "../components/servicesPage/createShadow/createShadow";
import DropShadow from "../components/servicesPage/dropShadow/dropShadow";
import Ghost from "../components/servicesPage/ghost/ghotst";
import JewelleryRetouch from "../components/servicesPage/jewelleryRetouch/jewelleryRetouch";
import NaturalShadow from "../components/servicesPage/naturalShadow/naturalShadow";
import NeckJoint from "../components/servicesPage/neckJoint/neckJoint";
import PhotoMasking from "../components/servicesPage/photoMasking/photoMasking";
import PhotoResize from "../components/servicesPage/photoResize/photoResize";
import PhotoRestoration from "../components/servicesPage/photoRestoration/photoRestoration";
import Retouch from "../components/servicesPage/retouch/retouch";
import Shadow from "../components/servicesPage/shadow/shadow";
import Reflection from "../components/servicesPage/reflection/reflection";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta
          property="og:title"
          name="title"
          content="Guaranteed Quality Professional Photo Editing Service | Online - Hire Photoshop Experts"
        />
        <meta
          property="og:description"
          name="description"
          content="Best quality professional all kind of photo editing services 
          provided by skilled photo editors."
        />
        <meta
          property="og:image"
          content="/assets/img/all_services_afterbefore/Background-remove/GVP-Background_Remove_2.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <main className="pt-[70px]">
        <div className="py-14">
          <Title />
          <Retouch />
          <Shadow />
          <Reflection />
          <ColorCorrection />
          <JewelleryRetouch />
          <Ghost />
          <PhotoRestoration />
          <CreateShadow />
          <PhotoMasking />
          <ClippingpathService />
          <MultiPathService />
          <NaturalShadow />
          <DropShadow />
          <PhotoResize />
          <NeckJoint />
          <BackgroundRemoveService />
        </div>
      </main>
    </div>
  );
};

export default contact;
