import Link from "next/link";
import paypalXoomWhiteColor from "../../../public/assets/img/all_Services/Graphics_view_point_Xoom-logo-01.png";
import paypalXoomBlackColor from "../../../public/assets/img/all_Services/Graphics-view_point_Xoom_logo-02.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaTumblr,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineBank, AiOutlineMail } from "react-icons/ai";
import { BsPaypal, BsHouseAdd, BsTelephone } from "react-icons/bs";
import { useSelector } from "react-redux";

const Footer = () => {
  const date = new Date();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <footer className="relative pt-8 pb-6 bg-[#b4bdfe] dark:bg-gray-800 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col text-left lg:flex-row lg:text-left">
          {/* left side */}
          <div className="w-full px-4 lg:w-6/12 ">
            <div className="flex flex-col gap-3 mb-6 sm:flex-row">
              <div className="w-full sm:w-8/12">
                {mode === "light" ? (
                  <img
                    src="/assets/img/logo/logo.svg"
                    alt="Logo"
                    height="50"
                    width="90"
                  />
                ) : (
                  <img
                    src="/assets/img/logo/logo2.svg"
                    alt="Logo"
                    height="50"
                    width="90"
                  />
                )}
                <p className="mt-0 mb-2 md:mr-5  md:text-[16px] text-sm text-justify text-black dark:text-white">
                  Graphics View Point is a professional post-production photo
                  editing company. It is basically an outsourcing company. Photo
                  editing service is provided by this company. Graphics View
                  Point is situated at the city of Dinajpur in Bangladesh....{" "}
                  <Link href="/about-us">
                    <span className="font-semibold underline cursor-pointer text-primary hover:text-secondary dark:text-white dark:hover:text-secondary">
                      [More]
                    </span>
                  </Link>
                </p>
                <div className="flex mt-6 mb-6 lg:mb-0">
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.facebook.com/graphicsviewponit"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaFacebookF className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.instagram.com/graphicsviewpoint24/"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaInstagram className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://twitter.com/graphicsviewpoi"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaTwitter className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.pinterest.com/graphicsviewpoint/pins/"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaPinterest className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.youtube.com/@GraphicsViewPoint"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaYoutube className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://wa.link/64lhcg"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaWhatsapp className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.tumblr.com/graphicsviewpoint"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaTumblr className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                  <button
                    className="flex items-center justify-center w-6 h-6 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none md:w-8 md:h-8 hover:bg-gray-300 align-center focus:outline-none"
                    type="button"
                  >
                    <a
                      href="https://www.linkedin.com/company/graphics-view-point/"
                      target="_blank"
                      className="hover:text-secondary "
                    >
                      <FaLinkedinIn className="md:text-[23px] text-primary dark:text-gray-800" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-4/12">
                <h4 className="mb-5 text-2xl font-bold underline md:text-3xl text-primary dark:text-white">
                  Quick Links
                </h4>
                <div className="py-1 text-sm font-bold ">
                  <Link href={"/free-trial"}>
                    <a className="underline md:text-[16px] text-sm text-primary hover:text-secondary dark:text-white dark:hover:text-secondary">
                      Free Trial
                    </a>
                  </Link>
                </div>
                <div className="py-1 text-sm font-bold">
                  <Link href={"/about-us"}>
                    <a className="underline md:text-[16px] text-sm text-primary hover:text-secondary dark:text-white dark:hover:text-secondary">
                      About Us
                    </a>
                  </Link>
                </div>
                <div className="py-1 text-sm font-bold ">
                  <Link href={"/contact-us"}>
                    <a className="underline md:text-[16px] text-sm text-primary hover:text-secondary dark:text-white dark:hover:text-secondary">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full px-4 lg:w-6/12 ">
            <div className="flex flex-col mb-6 sm:flex-row ">
              <div className="w-full  lg:w-[50%]  ">
                <h4 className="mb-5 text-2xl font-bold underline md:text-3xl text-primary dark:text-white">
                  Payments
                </h4>
                <ul className="list-unstyled">
                  <div className="flex items-center pb-2 ">
                    <span>
                      <AiOutlineBank size={20} className="dark:text-white" />
                    </span>
                    <li className="pl-2 md:text-[16px] text-sm font-semibold dark:text-white">
                      Bank Accounts
                    </li>
                  </div>
                  <div className="flex items-center pb-2">
                    <span>
                      <BsPaypal size={20} className="dark:text-white" />
                    </span>
                    <li className="pl-2 md:text-[16px] text-sm font-semibold dark:text-white">
                      Paypal (Xoom)
                    </li>
                  </div>
                  <div className="flex items-center pb-2">
                    <li className="pl-2 text-lg font-semibold">
                      {mode === "light" ? (
                        <Image src={paypalXoomBlackColor} alt="paypal Xoom" />
                      ) : (
                        <Image src={paypalXoomWhiteColor} alt="paypal Xoom" />
                      )}
                    </li>
                  </div>
                </ul>
              </div>
              <div className="w-full mt-4 sm:mt-0 lg:w-[50%]">
                <h4 className="mb-5 text-2xl font-bold underline md:text-3xl text-primary dark:text-white">
                  Address
                </h4>
                <ul className="list-unstyled">
                  <div className="flex pb-2 ">
                    <span>
                      <BsHouseAdd size={20} className="mt-1 dark:text-white" />
                    </span>
                    <li className="pl-2 md:text-[16px] text-sm font-semibold dark:text-white">
                      <span>
                        House No: 42(2nd floor) Ghashipara, Word No: 02, Ikbal
                        School Mor
                      </span>{" "}
                      <br />
                      <span>Post Code: 5200, Sadar, Dinajpur</span> <br />
                      <span>Bangladesh</span>
                    </li>
                  </div>
                  <div className="flex pb-2">
                    <span>
                      <AiOutlineMail
                        size={20}
                        className="mt-1 dark:text-white"
                      />
                    </span>
                    <li className="pl-2 md:text-[16px] text-sm font-semibold dark:text-white">
                      <span>info@graphicsviewpoint.com</span> <br />
                      <span>graphicsviewpoint24@gmail.com</span> <br />
                      <span>Start Chat by Skype</span> <br />
                      <span>Or</span> <br />
                      <span>Search Skype</span> <br />
                      <span>graphicsviewpoint24@gmail.com</span>
                    </li>
                  </div>
                  <div className="flex pb-2">
                    <span>
                      <BsTelephone size={20} className="mt-1 dark:text-white" />
                    </span>
                    <li className="pl-2 md:text-[16px] text-sm font-semibold dark:text-white">
                      <span>+8801328613629</span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <hr className=" border-t-1 border-primary dark:border-white" />
        <div className="flex items-center justify-center pt-4 md:justify-between">
          <div className="w-full px-2 mx-auto text-center ">
            <div className="py-1 text-sm font-semibold dark:text-white">
              Copyright ©{" "}
              <span id="get-current-year">
                {date.getFullYear()}{" "}
                <span>
                  <Link href="/">
                    <a className="font-semibold text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary">
                      Graphics View Point
                    </a>
                  </Link>
                </span>{" "}
                - All rights reserved.{" "}
                <Link href="/privecy">
                  <a className="font-semibold text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary">
                    Privecy Policy
                  </a>
                </Link>{" "}
                |{" "}
                <Link href="/terms">
                  <a className="font-semibold text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary">
                    Terms of use
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
