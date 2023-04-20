import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
} from "react-icons/hi";

interface INavs {
  id: number;
  title: string;
  href: string;
}

interface ISubsidiaryNavs extends INavs {
  logo: string;
}

const WebsiteNavs: INavs[] = [
  { id: 1, title: "Business", href: "/" },
  { id: 2, title: "About", href: "/" },
  { id: 3, title: "Career", href: "/" },
];

const WebSubsidiaryNavs: ISubsidiaryNavs[] = [
  {
    id: 1,
    title: "BSL Group",
    href: "/",
    logo: "/assets/icons/bsl-main.svg",
  },
  {
    id: 2,
    title: "Spectrum Fibre",
    href: "/",
    logo: "/assets/icons/spectrum-gray.svg",
  },
  {
    id: 3,
    title: "Infra Services",
    href: "/",
    logo: "/assets/icons/isg-gray.svg",
  },
  {
    id: 4,
    title: "Digital Payment",
    href: "/",
    logo: "/assets/icons/bdp-gray.svg",
  },
];

interface INavbar {
  pageName:
    | "BSL Home"
    | "Spectrum Fibre"
    | "Infra Services"
    | "Digital Payment"
    | "Business"
    | "About"
    | "Career"
    | "Enquiry"
    | "Galley";
}

interface INavbarNavButtons {
  title: string;
  href: string;
  imgSRC: string;
  active: boolean;
}

const NavButton = ({ active, title, href, imgSRC }: INavbarNavButtons) => {
  return (
    <button
      className={` ${
        active ? "bg-transparent" : "bg-transparent"
      }  px-6 w-full   h-10 relative`}
    >
      <Link href={href}>
        <Image src={imgSRC} alt={title} className="  " fill />
      </Link>
    </button>
  );
};

const CustomNavButton2 = ({
  href,
  title,
  active,
}: {
  href: string;
  title: string;
  active: boolean;
}) => {
  return (
    <button
      className={`hover:bg-gray-800/40 px-2 py-3  ${
        active
          ? "border-[#AB2346] border-b-[4px]"
          : "border-b-[4px] border-transparent"
      } `}
    >
      <Link href={href}>
        <h1 className="text-white font-medium text-md ">{title}</h1>
      </Link>
    </button>
  );
};

const Navbar = ({ pageName }: INavbar) => {
  const [openSubsidiaryMenu, setOpenSubsidiaryMenu] = useState<boolean>(false);
  const [openSiteMenu, setOpenSiteMenu] = useState<boolean>(false);
  const [openMediaDropdown, setOpenMediaDropdown] = useState<boolean>(false);
  const [openDesktopSubsidiaryMenu, setOpenDesktopSubsidiaryMenu] =
    useState<boolean>(false);
  return (
    <div className="  z-30 pt-2 fixed w-full  top-0   sm:backdrop-blur-sm sm:bg-gray-900/90 opacity-1">
      <div className="container mx-auto px-3 ">
        {/* mobile */}
        <div className="sm:hidden flex justify-between  py-2 items-start  ">
          <div className="flex  gap-1  justify-between">
            <div
              className={` ${
                openSubsidiaryMenu ? "bg-whitel" : "bg-transparent"
              }  rounded-[28px]  flex flex-col gap-0.5 `}
            >
              <button
                className="flex home-custom-navs   items-center justify-center    py-2 gap-1  "
                onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
              >
                <img
                  src="/assets/icons/bsl-main.svg"
                  className=" w-[75%]   py-0.5 "
                />
                {openSubsidiaryMenu ? (
                  <HiChevronUp size={24} />
                ) : (
                  <HiChevronDown size={24} />
                )}
              </button>

              <div
                className={`${
                  openSubsidiaryMenu ? "flex" : "hidden"
                }  flex-col gap-3  pb-2 border bg-white rounded-[28px] p-4 w-full`}
              >
                <button className="flex justify-start   w-full items-start ">
                  <img src="/assets/icons/bdp.svg" alt="bdp" />
                </button>
                <button className="flex justify-start px-4  w-full items-start  ">
                  <img
                    src="/assets/icons/spectrum.svg"
                    alt="spectrum"
                    className="-mx-4"
                  />
                </button>
                <button className="flex justify-start px-4  w-full items-start ">
                  <img
                    src="/assets/icons/isg.svg"
                    alt="isg"
                    className="h-full  -mx-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setOpenSiteMenu((prev) => !prev);
              setOpenSubsidiaryMenu(false);
            }}
          >
            <img src="/assets/icons/home-2.svg" className="h-4/5" />
          </button>
        </div>

        {/* desktop */}
        <div className="hidden sm:flex justify-between w-full   ">
          <div className="w-6/12    flex justify-between   items-center   ">
            <div
              className="w-1/4 flex items-center gap-1"
              onMouseEnter={() => setOpenDesktopSubsidiaryMenu(true)}
              onMouseLeave={() => setOpenDesktopSubsidiaryMenu(false)}
            >
              <button className={`px-6 w-full   h-10 relative `}>
                <Link href={"/"}>
                  <Image
                    src={"/assets/icons/bsl-main.svg"}
                    alt={"img"}
                    className="w-full  "
                    fill
                  />
                </Link>
                {/* <div className="right-0 absolute ">
                  
                </div> */}
              </button>
              {openDesktopSubsidiaryMenu ? (
                <HiChevronLeft size={24} />
              ) : (
                <HiChevronRight size={24} />
              )}
            </div>

            {openDesktopSubsidiaryMenu && (
              <div
                className="flex justify-between w-3/4 h-10 pl-3 gap-4"
                onMouseEnter={() =>
                  openDesktopSubsidiaryMenu &&
                  setOpenDesktopSubsidiaryMenu(true)
                }
                onMouseLeave={() => setOpenDesktopSubsidiaryMenu(false)}
              >
                <NavButton
                  title="Digital Payment"
                  href="/"
                  imgSRC="/assets/icons/bdp-main.svg"
                  active={pageName === "Digital Payment"}
                />

                <NavButton
                  title="BSL Home"
                  href="/"
                  imgSRC="/assets/icons/spectrum-main.svg"
                  active={pageName === "Spectrum Fibre"}
                />

                <NavButton
                  title="Infra Services"
                  href="/"
                  imgSRC="/assets/icons/isg-main.svg"
                  active={pageName === "Infra Services"}
                />
              </div>
            )}
          </div>

          <div className="flex gap-8  w-4/12 items-center justify-end  ">
            <div className="flex gap-12  ">
              <CustomNavButton2
                href="/business"
                title="Business"
                active={pageName === "Business"}
              />
              <CustomNavButton2
                href="/about"
                title="About"
                active={pageName === "About"}
              />
              <CustomNavButton2
                href="/career"
                title="Career"
                active={pageName === "Career"}
              />
            </div>
            <button>
              <img
                src="/assets/icons/home-2.svg"
                className="h-10 "
                alt="menu icon"
              />
            </button>
          </div>
        </div>

        {/* mobile screen menu nav */}
        <div
          className={` ${
            openSiteMenu ? "flex" : "hidden"
          } bg-white w-full h-[94vh] absolute top-0 left-0 sm:hidden flex container mx-auto px-3 py-2 rounded-bl-[110px] z-30 `}
        >
          <div className=" flex w-full justify-between flex-col gap-4 h-full border pt-2">
            <div className="flex justify-between  items-start  w-full">
              <div className="flex  gap-1  justify-between ">
                <div
                  className={` ${
                    openSubsidiaryMenu ? "bg-whitel" : "bg-transparent"
                  }  rounded-[28px]  flex flex-col gap-2 border relative `}
                >
                  <button
                    className="flex home-custom-navs  items-center justify-center    py-2  z-10 gap-1"
                    onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
                  >
                    <img
                      src="/assets/icons/bsl-main.svg"
                      className=" w-[75%]   py-0.5 "
                    />
                    {openSubsidiaryMenu ? (
                      <HiChevronUp size={24} />
                    ) : (
                      <HiChevronDown size={24} />
                    )}
                  </button>

                  <div
                    className={`${
                      openSubsidiaryMenu ? "flex" : "hidden"
                    }   absolute top-[3.3rem]  rounded-b-[22px] -z-2  flex-col gap-3  pb-2 border bg-white rounded-[28px] p-4 w-full`}
                  >
                    <button className="flex justify-start   w-full items-start ">
                      <img src="/assets/icons/bdp.svg" alt="bdp" />
                    </button>
                    <button className="flex justify-start px-4  w-full items-start  ">
                      <img
                        src="/assets/icons/spectrum.svg"
                        alt="spectrum"
                        className="-mx-4"
                      />
                    </button>
                    <button className="flex justify-start px-4  w-full items-start ">
                      <img
                        src="/assets/icons/isg.svg"
                        alt="isg"
                        className="h-full  -mx-4"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setOpenSiteMenu((prev) => !prev);
                  setOpenSubsidiaryMenu(false);
                }}
              >
                <img src="/assets/icons/home-2-close.svg" className="h-4/5" />
              </button>
            </div>

            <div className="px-6 flex flex-col gap-4">
              <Link href="/business">
                <h1
                  className="text-[#1D365A] font-medium text-4xl"
                  onClick={() => setOpenSiteMenu(false)}
                >
                  Business
                </h1>
              </Link>
              <Link href="/about">
                <h1
                  className="text-[#1D365A] font-medium text-4xl"
                  onClick={() => setOpenSiteMenu(false)}
                >
                  About
                </h1>
              </Link>
              <Link href="/career">
                <h1
                  className="text-[#1D365A] font-medium text-4xl"
                  onClick={() => setOpenSiteMenu(false)}
                >
                  Career
                </h1>
              </Link>

              <div className="text-[#1D365A]  h-20">
                <button
                  className=" font-medium text-4xl  text-left flex items-center gap-2"
                  onClick={() => setOpenMediaDropdown((prev) => !prev)}
                >
                  Media
                  <img src="/assets/icons/navs/down-blue.svg" className=" " />
                </button>
                <div
                  className={`${
                    openMediaDropdown ? "flex" : "hidden"
                  }  justify-between mt-3`}
                >
                  <Link href="/">
                    <h1>Newsletters</h1>
                  </Link>
                  <Link href="/">
                    <h1>Publications</h1>
                  </Link>
                  <Link href="/gallery">
                    <h1>Gallery</h1>
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-6 flex  flex-col gap-6">
              <h1 className="text-[#AB2346] uppercase font-medium tracking-wider text-xl border-b pb-2">
                Our Subsidiaries
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <button className="col">
                  <img src="/assets/icons/menu-nav/bdp.svg" />
                </button>
                <button className="col">
                  <img src="/assets/icons/menu-nav/spectrum.svg" />
                </button>
                <button className="col">
                  <img src="/assets/icons/menu-nav/isg.svg" />
                </button>
                <button className="col">
                  <img src="/assets/icons/menu-nav/eagric.svg" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <button
                className="custom-button1"
                onClick={() => setOpenSiteMenu(false)}
              >
                <Link href="/enquiry">Get in Touch</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
