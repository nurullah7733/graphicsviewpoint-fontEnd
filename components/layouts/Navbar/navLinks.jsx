import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavLinks = ({ setOpen }) => {
  const [activeClass, setActiveClass] = useState(0);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const handleActiveMenu = (idx) => {
    setActiveClass(idx);
  };

  const allLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "services",
      submenu: true,
      link: "/services",
      subMenuItems: [
        {
          subMenuItemsHead: "Main Services",
          subMenuItemsNames: [
            {
              subMenuItemsNamesEachNames: "Retouching Services",
              subMenuItemsNamesEachNamesLinks: "/services/retouching",
            },
            {
              subMenuItemsNamesEachNames: "Shadow Service",
              subMenuItemsNamesEachNamesLinks: "/services/shadow",
            },
            {
              subMenuItemsNamesEachNames: "Reflection Service",
              subMenuItemsNamesEachNamesLinks: "/services/reflection",
            },
            {
              subMenuItemsNamesEachNames: "Color Correction service",
              subMenuItemsNamesEachNamesLinks: "/services/color-correction",
            },
            {
              subMenuItemsNamesEachNames: "jewellery retouching service",
              subMenuItemsNamesEachNamesLinks: "/services/jewellery-retouch",
            },
          ],
        },
        {
          subMenuItemsHead: "Special Services",
          subMenuItemsNames: [
            {
              subMenuItemsNamesEachNames: "Ghost Mannequin Services",
              subMenuItemsNamesEachNamesLinks: "/services/ghost-mannequin",
            },
            {
              subMenuItemsNamesEachNames: "Photo Restoration Services",
              subMenuItemsNamesEachNamesLinks: "/services/photo-restoration",
            },
            {
              subMenuItemsNamesEachNames: "Create Shadow Services",
              subMenuItemsNamesEachNamesLinks: "/services/create-shadow",
            },
            {
              subMenuItemsNamesEachNames: "Clipping Path Sercices",
              subMenuItemsNamesEachNamesLinks: "/services/clipping-path",
            },
            {
              subMenuItemsNamesEachNames: "Photo Masking Services",
              subMenuItemsNamesEachNamesLinks: "/services/photo-masking",
            },
          ],
        },
        {
          subMenuItemsHead: "Aditional Services",
          subMenuItemsNames: [
            {
              subMenuItemsNamesEachNames: "Multi Path Services",
              subMenuItemsNamesEachNamesLinks: "/services/multi-path",
            },
            {
              subMenuItemsNamesEachNames: "Natural Shadow Services",
              subMenuItemsNamesEachNamesLinks: "/services/natural-shadow",
            },
            {
              subMenuItemsNamesEachNames: "Drop Shadow Service",
              subMenuItemsNamesEachNamesLinks: "/services/drop-shadow",
            },
            {
              subMenuItemsNamesEachNames: "Photo Resizing Service",
              subMenuItemsNamesEachNamesLinks: "/services/photo-resizing",
            },
            {
              subMenuItemsNamesEachNames: "Neck Joint Services",
              subMenuItemsNamesEachNamesLinks: "/services/neck-joint",
            },
            {
              subMenuItemsNamesEachNames: "Background Remove Services",
              subMenuItemsNamesEachNamesLinks: "/services/background-remove",
            },
          ],
        },
      ],
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <>
      {allLinks.map((item, i) => (
        <div key={i} className="z-50">
          <div
            className="py-4 text-left md:py-0 group"
            onClick={() => handleActiveMenu(i)}
          >
            <li
              onMouseDown={() => setOpen(false)}
              onClick={() => setHeading(item.name)}
              className={`flex items-center justify-between md:font-semibold group hover:text-[#4b174b] dark:hover:text-gray-400 text-primary dark:text-gray-400 ${
                activeClass === i
                  ? "bg-primary dark:bg-gray-700 !text-gray-400 px-3 py-2.5 rounded-md"
                  : ""
              }`}
            >
              <Link href={`${item?.link}`}>
                <a className="hover:text-inherit ">{item?.name}</a>
              </Link>

              {/* submenu updown icon*/}
              {item.submenu && (
                <>
                  <span className="inline text-base leading-3 md:hidden">
                    {heading === item.name ? (
                      <CaretUpOutlined />
                    ) : (
                      <CaretDownOutlined />
                    )}
                  </span>
                  <span className="hidden text-base leading-3 duration-500 md:block group-hover:rotate-180 ">
                    {heading === item.name ? (
                      <CaretUpOutlined className="" />
                    ) : (
                      <CaretDownOutlined className="" />
                    )}
                  </span>
                </>
              )}
            </li>
            {/* For Mobile */}
            <div
              className={`${heading === item.name ? "md:hidden" : "hidden"}   `}
            >
              {item.submenu &&
                item.subMenuItems.map((items, i) => {
                  return (
                    <div key={i}>
                      <div>
                        <h1
                          onClick={() =>
                            subHeading !== items.subMenuItemsHead
                              ? setSubHeading(items.subMenuItemsHead)
                              : setSubHeading("")
                          }
                          className="flex justify-between py-4 pr-5 text-[14px] p-7 md:pr-0"
                        >
                          {items.subMenuItemsHead}
                          <span style={{ lineHeight: "0.4" }}>
                            {subHeading === items.subMenuItemsHead ? (
                              <CaretUpOutlined />
                            ) : (
                              <CaretDownOutlined />
                            )}
                          </span>
                        </h1>
                        <div
                          className={`${
                            subHeading === items.subMenuItemsHead
                              ? "md:hidden"
                              : "hidden"
                          }`}
                        >
                          {items.subMenuItemsNames.map((subItems, i) => {
                            return (
                              <li
                                key={i}
                                className="py-3 pl-16 text-[13px] text-primary"
                                onClick={() => setOpen(false)}
                              >
                                <Link
                                  href={
                                    subItems.subMenuItemsNamesEachNamesLinks
                                  }
                                >
                                  {subItems.subMenuItemsNamesEachNames}
                                </Link>
                              </li>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {item.submenu && (
              <div>
                <div className="absolute hidden top-12 group-hover:md:block hover:md:block">
                  {/* for Corner */}
                  <div className="py-3">
                    <div className="absolute w-4 h-4 mt-1 rotate-45 bg-white dark:bg-gray-700 left-4"></div>
                  </div>
                  {/*end for Corner */}
                  <div className="grid grid-cols-3 bg-white dark:bg-gray-700 gap-x-10 gap-y-10 p-7">
                    {item.subMenuItems.map((mySubLinks, i) => (
                      <div key={i}>
                        <h1 className="flex text-lg font-medium text-blue-500">
                          {mySubLinks.subMenuItemsHead}
                        </h1>
                        {mySubLinks.subMenuItemsNames.map((menu, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-500 dark:text-white my-3.5"
                          >
                            <Link href={menu.subMenuItemsNamesEachNamesLinks}>
                              <a className="visited:text-purple-500 hover:text-gray-400 text-primary dark:text-white active:text-blue-300">
                                {menu.subMenuItemsNamesEachNames}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
