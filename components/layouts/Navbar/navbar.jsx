import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavLinks from "./navLinks";
import styles from "../../../styles/Home.module.css";
import DarkOrLightModeButton from "../../common/darkOrLightModeButton/darkOrLightModeButton";
import { useWindowSize } from "../../../utils/windowSize/useWindowSize";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const mode = useSelector((state) => state.mode.mode);

  const [stickyClass, setStickyClass] = useState("md:flxed");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [router]);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if (window !== undefined && router.pathname == "/") {
      windowHeight > 10 ? setStickyClass("border-b-[1px]") : setStickyClass("");
    }
  };

  return (
    <div
      className={` md:h-[72px] ${stickyClass} z-50 w-full fixed dark:text-white 
       bg-white dark:bg-gray-800  
      `}
    >
      <nav className={`px-4 h-[75px] pt-[10px] container mx-auto`}>
        <div className="flex items-center justify-around font-medium ">
          <div className="z-50 flex items-center justify-between w-full md:cursor-pointer md:w-auto">
            {mode === "light" ? (
              <Link href={"/"}>
                <img
                  src="/assets/img/logo/logo.svg"
                  alt="Logo"
                  height="50"
                  width="90"
                />
              </Link>
            ) : (
              <Link href={"/"}>
                <img
                  src="/assets/img/logo/logo2.svg"
                  alt="Logo"
                  height="50"
                  width="90"
                />
              </Link>
            )}
            {/* darkMode toggle */}
            {useWindowSize().width < 768 ? <DarkOrLightModeButton /> : null}
            <div
              className="text-2xl duration-500 md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-4   lg:gap-8 uppercase font-[Poppins]  ">
            <NavLinks setOpen={setOpen} />
          </ul>
          {/* darkMode toggle */}
          {useWindowSize().width > 768 ? <DarkOrLightModeButton /> : null}
          <div className="hidden cursor-pointer md:block">
            <div className="px-3 py-2 bg-[#4b174b] rounded dark:bg-gray-500 btn hover:bg-[#290b29]">
              <div className={styles.freeTrialButton}>
                <div className={styles.freeTrialButton1}>
                  <Link href={"/free-trial"}>
                    <a>Free&nbsp; Trial</a>
                    {/* <span>Trial</span> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* For Mobile */}
          <div
            className={`bg-white dark:bg-gray-800 h-full uppercase font-[Poppins] w-full py-24   md:hidden absolute bottom-0 z-10 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul className="z-30 mt-24 bg-main dark:bg-gray-800 pl-9 pr-9">
              {/* <li className="pb-5">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li> */}
              <NavLinks setOpen={setOpen} />
              <div className="pt-3 pb-7">
                <button className="px-5 py-2 rounded btn hover:bg-secondary bg-primary dark:bg-gray-700">
                  <Link href={"/free-trial"}>
                    <a>Free Trial</a>
                  </Link>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
