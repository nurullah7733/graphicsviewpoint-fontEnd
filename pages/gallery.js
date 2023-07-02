import Retouch from "../components/galleryPage/retouch/retouch";
import BackgroundRemove from "../components/galleryPage/backgroundRemove/backgroundRemove";
import ClippingPath from "../components/galleryPage/clipingPath/clippingPath";
import ColorCorrection from "../components/galleryPage/colorCorrection/colorCorrection";
import CreateShadow from "../components/galleryPage/createShadow/createShadow";
import DropShadow from "../components/galleryPage/dropShadow/dropShadow";
import Ghost from "../components/galleryPage/ghost/ghost";
import JewelleryRetouch from "../components/galleryPage/jewelleryRetouch/jewelleryretouch";
import Multipath from "../components/galleryPage/multipath/multipath";
import NaturalShadow from "../components/galleryPage/naturalShadow/naturalShadow";
import Neckjoint from "../components/galleryPage/neckjoint/neckjoint";
import PhotoMasking from "../components/galleryPage/photoMasking/photoMasking";
import PhotoResize from "../components/galleryPage/photoResize/photoResize";
import PhotoRestoration from "../components/galleryPage/photoRestoration/photoRestoration";
import Reflection from "../components/galleryPage/reflection/reflection";
import Shadow from "../components/galleryPage/shadow/shadow";
import Head from "next/head";
import SectionDivider from "../components/common/sectionDivider/sectionDivider";
import GallaryBottomSection from "../components/galleryPage/gallaryBottomSection/gallaryBottomSection";
import Image from "next/image";
import { useWindowSize } from "../utils/windowSize/useWindowSize";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          property="og:title"
          name="title"
          content="Photo Editing Gallery |Graphics View Point"
        />
        <meta
          property="og:description"
          name="description"
          content="A gallery is an open door for you to display past works and performances."
        />
        <meta
          property="og:image"
          content="/assets/img/banner/GVP_Gallery_Banner.jpg"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>

      <div className="pt-[71px] ">
        <div className="text-center ">
          {console.log(useWindowSize().width < 700)}
          <Image
            width={2500}
            height={useWindowSize().width < 768 ? 700 : 650}
            src="/assets/img/banner/GVP_Gallery_Banner.jpg"
          />
        </div>
        <div className="container mx-auto">
          <Retouch />
          <Shadow />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <Reflection />
          <ColorCorrection />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <JewelleryRetouch />
          <Ghost />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <PhotoRestoration />
          <CreateShadow />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <PhotoMasking />
          <ClippingPath />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <Multipath />
          <NaturalShadow />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <DropShadow />
          <PhotoResize />
          <div className="mt-10">
            <SectionDivider text={"Get a Free Trial"} href="free-trial" />
          </div>
          <Neckjoint />
          <BackgroundRemove />
          <GallaryBottomSection />
        </div>
      </div>
    </>
  );
};

export default Gallery;
