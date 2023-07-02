import React, { Component } from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden py-14">
      <h2 className="title">Client Testimonials</h2>
      <p className="md:w-[50%] w-[95%] text-[16px] mx-auto pt-7 text-justify dark:text-white">
        Graphics View Point has glad lots of clients with our expert service.
        See what have they told about us. Why not create yourself be on this
        list? We are waiting to receiving comments from you.
      </p>
      <Slider {...settings}>
        <div>
          <section className="">
            <div className="max-w-screen-xl px-4 pt-16 mx-auto text-center lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-primary dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium md:font-bold md:text-2xl text-primary dark:text-white">
                    "Our experience with the photo editing services provided by
                    this company was exceptional. The quality of work was
                    outstanding and their customer service was top-notch."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="/assets/img/clients/3.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-500">
                    <div className="pr-3 text-sm font-bold md:text-base text-primary dark:text-white">
                      Micheal Gough
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      Production Manager
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
        <section className="">
          <div className="max-w-screen-xl px-4 pt-16 mx-auto text-center lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-primary dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium md:font-bold md:text-2xl text-primary dark:text-white">
                  "Working with XYZ Photo Editing has been a game-changer for
                  our business. Their attention to detail and exceptional
                  customer service have exceeded our expectations. We highly
                  recommend their services."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="/assets/img/clients/2.jpg"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-500">
                  <div className="pr-3 text-sm font-bold md:text-base text-primary dark:text-white">
                    John Smith
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Owner of ABC Photography.
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="">
          <div className="max-w-screen-xl px-4 pt-16 mx-auto text-center lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-primary dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium md:font-bold md:text-2xl text-primary dark:text-white">
                  "I am extremely satisfied with the photo editing services
                  provided by Graphics View Point. The team's professionalism,
                  attention to detail, and quick turnaround time have been
                  instrumental in the success of my business. I highly recommend
                  their services."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="/assets/img/clients/1.jpg"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-500">
                  <div className="pr-3 text-sm font-bold md:text-base text-primary dark:text-white">
                    Sarah Johnson
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Owner of SJ Photography.
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Testimonials;
