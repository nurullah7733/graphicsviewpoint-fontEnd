import Slider from "react-slick";
import Image from "next/image";
import React, { Component, useState } from "react";
import styles from "../../../styles/Home.module.css";
import { useEffect } from "react";
import { useRef } from "react";
import Btn from "../../common/btn/btn";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="md:!p-0 !pt-[72px]"
      style={{
        overflowX: "hidden",
        paddingTop: "0",
        textAlign: "center",
        fontSize: "0px",
      }}
    >
      <Slider {...settings}>
        <div className="slider_container ">
          <Image
            className="block bg-white"
            alt="Jewellery Retouching and Color Correction Service"
            width={6000}
            height={3000}
            src="/assets/img/Slider/gvp-Jewellery-Retouching.webp"
          />

          <div>
            <div className={`${styles.inner_slider_text}  `}>
              <h3
                className={`!text-5xl font-bold !leading-[60px] pb-2 text-primary  `}
              >
                We Provide Best Quality
                <br />
                Jewellery Retouching Service
              </h3>
              <h5 className="!text-xl font-bold pb-4 text-black">
                Glamour Retouch | Color Correction,
                <br />
                E-commerce Photo Retouch | Photo Restoration
              </h5>
              <Btn btnHref="free-trial" btnText={"Free Trial"} />
            </div>
          </div>
        </div>
        <div className="slider_container">
          <Image
            className="block bg-white"
            alt="Photo High End Retouching Service"
            width={6000}
            height={3000}
            src="/assets/img/Slider/gvp-High-End-Retouching.webp"
          />
          <div>
            <div className={`${styles.inner_slider_text}`}>
              <h3 className="!text-5xl font-bold !leading-[60px] pb-2 text-primary  ">
                We Provide Best Quality
                <br />
                Photo Retouching Service
              </h3>
              <h5 className="!text-xl font-bold pb-4 text-black">
                Glamour Retouch | Product Photo Retouch,
                <br />
                Ecommerce Photo Retouch | Photo Restoration
              </h5>
              <Btn btnHref="free-trial" btnText={"Free Trial"} />
            </div>
          </div>
        </div>
        <div className="slider_container">
          <Image
            className="block bg-white"
            alt="Create Shadow Service"
            width={6000}
            height={3000}
            src="/assets/img/Slider/gvp-Create-Shadow.webp"
          />
          <div>
            <div className={`${styles.inner_slider_text} `}>
              <h3 className="!text-5xl font-bold !leading-[60px] pb-2 text-primary">
                We Provide Best Quality
                <br />
                Shadow Service
              </h3>
              <h5 className="!text-xl font-bold pb-4 text-black">
                Create Shadow | Natural Shaow | Drop Shadow
                <br />
                Ecommerce Photo Retouch | Background Remove
              </h5>
              <Btn btnHref="free-trial" btnText={"Free Trial"} />
            </div>
          </div>
        </div>
        <div className="slider_container">
          <Image
            className="block bg-white"
            alt="Photo Masking Service"
            width={6000}
            height={3000}
            src="/assets/img/Slider/gvp-Create-Reflection.webp"
          />
          <div>
            <div className={`${styles.inner_slider_text} `}>
              <h3 className="!text-5xl font-bold !leading-[60px] pb-2 text-primary">
                We Provide Best Quality
                <br />
                Product Reflection Service
              </h3>
              <h5 className="!text-xl font-bold pb-4 text-black">
                Create Reflection | Natural Reflection
                <br />
                Clipping Path | Shadow | Photo Masking
              </h5>
              <Btn btnHref="free-trial" btnText={"Free Trial"} />
            </div>
          </div>
        </div>
        <div className="slider_container">
          <Image
            align="absbottom"
            className="block bg-white"
            alt="Create Reflection Service"
            width={6000}
            height={3000}
            src="/assets/img/Slider/gvp-Photo-Masking.webp"
          />
          <div>
            <div className={`${styles.inner_slider_text}  `}>
              <h3 className="!text-5xl font-bold !leading-[60px] pb-2 text-primary">
                We Provide Best Quality
                <br />
                Photo Masking Service
              </h3>
              <h5 className="!text-xl font-bold pb-4 text-black">
                Glamour Retouch | Background Remove,
                <br />
                E-commerce Photo Retouch | Color Correction
              </h5>
              <Btn btnHref="free-trial" btnText={"Free Trial"} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
