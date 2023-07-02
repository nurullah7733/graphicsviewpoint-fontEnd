import React from "react";
import Link from "next/link";

const Faq = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-14">
        <div className="container px-8 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary dark:text-white">
                  FAQ
                </span>
                <h2 className="mb-4 title">Any Questions? Look Here</h2>
                <p className="text-base text-justify text-body-color dark:text-white">
                  Here we have tried to answer some common questions you ask. In
                  addition to these questions, if you want to know more about
                  us, please{" "}
                  <Link href="/contact-us">
                    <a className="hover:text-primary">
                      <span className="font-semibold hover:text-primary">
                        contact us
                      </span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE]  dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white text-primary">
                      How do I get start?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq1" className="faq-content pl-[62px]">
                  <div className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    It is very easy! There are 4 easy steps to get started with
                    Graphics View Point:
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>{" "}
                      <span className="underline">1. Get a free trial: </span>{" "}
                      Firstly, just for your certitude, get a free trial and
                      check on our quality.
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>{" "}
                      <span className="underline"> 2. Get a Quote:</span> After
                      completing the free trial, you can get a quote from us. We
                      will send you the quote quickly.
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>{" "}
                      <span className="underline">3. Place your order:</span>{" "}
                      After that you can place your order by giving us important
                      details, As like Name, Phone number and E-mail. Send me
                      your photos and Instruction .
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>{" "}
                      <span className="underline">4. Get your work done: </span>{" "}
                      Your work will be done by our Photo editing specialists.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white text-primary">
                      Why hire Graphics View Point?
                    </h4>
                  </div>
                </button>
                <div
                  x-show="openFaq2"
                  className="faq-content pl-[62px] text-justify"
                >
                  <div className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    It is very easy! There are 4 easy steps to get started with
                    Graphics View Point:
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>
                      <span className="underline">Free Trial: </span> Free trial
                      is provided just for our clients. It is to protect that
                      you know and learn about the company’s service in a best
                      way and get to experience it before be steeped into the
                      actual deal. All your are concerns will be validated once
                      you opt for a free trial. We are confirm you will not be
                      disappointed.
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>
                      <span className="underline">Cost-effective: </span>
                      Graphics View Point provides you with cost-effective work.
                      We strongly believe in quality and good value linked with
                      the most modest rates. It will be highly cost-effective,
                      for you to avail our services and enjoy the benefits of
                      best quality work.
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>
                      <span className="underline">Quick turnaround time: </span>
                      Our fast turnaround time is a feather in the cap. We get
                      back, to our clients as soon as possible. So now, when in
                      a urgency, don’t you worry! Graphics View Point is here to
                      save the day.
                    </p>{" "}
                    <p>
                      <span className="text-2xl font-bold">&there4; </span>
                      <span className="underline">Top-notch Quality: </span> Our
                      work quality speaks for it self. We make certain to
                      provide you with top-notch quality work because that is
                      our company’s mission and ultimate motive.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE]  dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white text-primary">
                      What kind of service is provided?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq4" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    Graphics View Point providing all kinds of photo editing
                    services. AS like. Clipping Path Service, Multi Path
                    Service, Shadow Service, Retouching Service, Color
                    Correction Service, Jewellery retouching Service, Ghost
                    Mannequin Service, Photo Masking Service, Reflection
                    Service, Natural Shadow Service, Photo Restoration Service,
                    Neck joint Service, Create Shadow Service, Background remove
                    service, Drop Shadow Service, Photo Resizing service etc.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white">
                      What should I do if I am not happy with the results of my
                      photo editing?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq5" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    If you are not happy with the results of your photo editing,
                    you should contact the company immediately. The company
                    should be willing to work with you to correct any problems
                    with your photos.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white text-primary">
                      Why will you like Graphics View Point?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    Graphics View Point strives to 100% best quality work,
                    clients 24/7 Support, Unlimited Revision, On time job
                    delivery, Bulk order discount, 100% secured file transfer,
                    Skilled photo editors for certain services, We are always
                    try to charge as minimum as possible.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="flex w-full text-left faq-btn">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold dark:text-white text-primary">
                      What should I do if I'm not happy with the results of my
                      photo editing?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color dark:text-white">
                    If you're not happy with the results of your photo editing,
                    the first thing you should do is contact the company. Most
                    photo editing companies offer a satisfaction guarantee, so
                    you may be able to get your money back or have the photos
                    edited again. If you're still not happy, you may want to
                    consider hiring a different photo editing company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Faq;
