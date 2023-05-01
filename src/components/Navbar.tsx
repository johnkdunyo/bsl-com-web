import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";

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
  imgSRC: string;
  imgSRC2: string;
}

const WebsiteNavs: INavs[] = [
  { id: 1, title: "Business", href: "/" },
  { id: 2, title: "About", href: "/" },
  { id: 3, title: "Career", href: "/" },
];

const WebSubsidiaryNavs: ISubsidiaryNavs[] = [
  {
    id: 1,
    title: "BSL Home",
    href: "/",
    imgSRC: "/assets/icons/bsl-main.svg",
    imgSRC2: "/assets/icons/bsl-main.svg",
  },
  {
    id: 2,
    title: "Spectrum Fibre",
    href: "/spectrumfibre",
    imgSRC: "/assets/icons/spectrum-main.svg",
    imgSRC2: "/assets/icons/spectrum.svg",
  },
  {
    id: 3,
    title: "Infra Services",
    href: "/isg",
    imgSRC: "/assets/icons/isg-main.svg",
    imgSRC2: "/assets/icons/isg.svg",
  },
  {
    id: 4,
    title: "Digital Payment",
    href: "/bdp",
    imgSRC: "/assets/icons/bdp-main.svg",
    imgSRC2: "/assets/icons/bdp.svg",
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
  active?: boolean;
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
  textColorWhite = true,
}: {
  href: string;
  title: string;
  active: boolean;
  textColorWhite?: boolean;
}) => {
  return (
    <button
      className={`${
        textColorWhite
          ? "hover:bg-gray-800/40"
          : "hover:bg-gray-100 border-transparent"
      } px-2 py-3  ${
        active
          ? "border-[#AB2346] border-b-[4px]"
          : "border-b-[4px] border-transparent"
      } `}
    >
      <Link href={href}>
        <h1
          className={`${
            textColorWhite ? "text-white" : "text-primary"
          } font-medium text-md `}
        >
          {title}
        </h1>
      </Link>
    </button>
  );
};

const CustomNavList = ({ title, href }: { title: string; href: string }) => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div className=" w-full ">
      <div
        className="flex items-center gap-4 "
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        {showArrow && (
          <img
            alt="arrow left"
            src="/assets/icons/navs/right-red.svg"
            className="-ml-6 pr-10"
          />
        )}
        <button>
          <Link
            href={href}
            className={`text-primary font-medium text-6xl ${
              showArrow && "text-secondary font-bold"
            }`}
          >
            {title}
          </Link>
        </button>

        {title === "Media" && showArrow && (
          <div className="text-primary flex gap-5 items-end h-12 ">
            <Link href="/">
              <h1 className="hover:font-medium">Newsletters</h1>
            </Link>
            <Link href="/">
              <h1 className="hover:font-medium">Publications</h1>
            </Link>
            <Link href="/gallery">
              <h1 className="hover:font-medium">Gallery</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Navbar = ({ pageName }: INavbar) => {
  const [openSubsidiaryMenu, setOpenSubsidiaryMenu] = useState<boolean>(false);
  const [openSiteMenu, setOpenSiteMenu] = useState<boolean>(false);
  const [openMediaDropdown, setOpenMediaDropdown] = useState<boolean>(false);
  const [openDesktopSubsidiaryMenu, setOpenDesktopSubsidiaryMenu] =
    useState<boolean>(false);

  const [restOfNavs, setRestOfNavs] = useState(
    WebSubsidiaryNavs.filter((nav) => nav.title !== "BSL Home")
  );
  const [currentNav, setCurrentNav] = useState<ISubsidiaryNavs>({
    id: 1,
    title: "BSL Home",
    href: "/",
    imgSRC: "/assets/icons/bsl-main.svg",
    imgSRC2: "/assets/icons/bsl.svg",
  });

  useEffect(() => {
    if (pageName === "Digital Payment") {
      setCurrentNav({
        id: 4,
        title: "Digital Payment",
        href: "/bdp",
        imgSRC: "/assets/icons/bdp-main.svg",
        imgSRC2: "/assets/icons/bdp.svg",
      });
      setRestOfNavs(
        WebSubsidiaryNavs.filter((nav) => nav.title !== "Digital Payment")
      );
    }

    if (pageName === "Infra Services") {
      setCurrentNav({
        id: 3,
        title: "Infra Services",
        href: "/isg",
        imgSRC: "/assets/icons/isg-main.svg",
        imgSRC2: "/assets/icons/isg.svg",
      });
      setRestOfNavs(
        WebSubsidiaryNavs.filter((nav) => nav.title !== "Infra Services")
      );
    }

    if (pageName === "Spectrum Fibre") {
      setCurrentNav({
        id: 2,
        title: "Spectrum Fibre",
        href: "/spectrumfibre",
        imgSRC: "/assets/icons/spectrum-main.svg",
        imgSRC2: "/assets/icons/spectrum.svg",
      });
      setRestOfNavs(
        WebSubsidiaryNavs.filter((nav) => nav.title !== "Spectrum Fibre")
      );
    }
  }, [pageName]);

  return (
    <div className="  z-30 pt-2 fixed w-full  top-0   md:backdrop-blur-sm md:bg-gray-900/90 opacity-1">
      <div className="container mx-auto px-3 ">
        {/* mobile */}
        <div className="md:hidden flex justify-between  py-2 items-start  ">
          <div className="flex  gap-1  justify-between">
            <div
              className={` ${
                openSubsidiaryMenu ? "bg-whitel" : "bg-transparent"
              }  rounded-[28px]  flex flex-col gap-0.5 w-52`}
            >
              <button
                className="flex home-custom-navs   items-center justify-center    py-2 gap-1  "
                onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
              >
                <img
                  src={currentNav.imgSRC}
                  className=" w-[75%]   py-0.5  h-9  text-left"
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
                }  flex-col gap-1  pb-2  bg-white rounded-[28px] p-4 w-full`}
              >
                {restOfNavs.map((nav) => (
                  <button className="flex px-4  w-full py-1 " key={nav.id}>
                    <Link href={nav.href}>
                      <img src={nav.imgSRC2} className="-ml-3   h-8 w-full" />
                    </Link>
                  </button>
                ))}
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
        <div className="hidden md:flex justify-between w-full    ">
          <div className="w-6/12    flex justify-between   items-center   ">
            <div
              className="w-1/4 flex items-center gap-1"
              onMouseEnter={() => setOpenDesktopSubsidiaryMenu(true)}
              onMouseLeave={() => setOpenDesktopSubsidiaryMenu(false)}
            >
              <button className={`px-6 w-full   h-10 relative `}>
                <Link href={currentNav.href}>
                  <Image
                    src={currentNav.imgSRC}
                    alt={"img"}
                    className="w-full  "
                    fill
                  />
                </Link>
              </button>
              {openDesktopSubsidiaryMenu ? (
                <HiChevronLeft size={24} />
              ) : (
                <HiChevronRight size={24} />
              )}
            </div>

            {openDesktopSubsidiaryMenu && (
              <motion.div
                animate={{ type: "spring", opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="flex justify-between w-3/4 h-10 pl-3 gap-4"
                onMouseEnter={() =>
                  openDesktopSubsidiaryMenu &&
                  setOpenDesktopSubsidiaryMenu(true)
                }
                onMouseLeave={() => setOpenDesktopSubsidiaryMenu(false)}
              >
                {restOfNavs.map((nav) => (
                  <NavButton
                    key={nav.id}
                    href={nav.href}
                    title={nav.title}
                    imgSRC={nav.imgSRC}
                  />
                ))}
              </motion.div>
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
            <button onClick={() => setOpenSiteMenu((prev) => !prev)}>
              <img
                src="/assets/icons/home-2.svg"
                className="h-10  fill-primary"
                alt="menu icon"
              />
            </button>
          </div>
        </div>

        {/* mobile screen menu nav */}
        <div
          className={` ${
            openSiteMenu ? "flex" : "hidden"
          } bg-white w-full h-[94vh] md:h-[90vh] absolute top-0 left-0 flex  px-3 py-2 rounded-bl-[110px] md:rounded-bl-[200px] z-30 `}
        >
          {/* mobile */}
          <div className="md:hidden container mx-auto flex w-full justify-between flex-col gap-4 h-full  pt-2">
            <div className="flex justify-between  items-start  w-full">
              <div className="flex  gap-1  justify-between ">
                <div
                  className={` ${
                    openSubsidiaryMenu ? "bg-whitel" : "bg-transparent"
                  }  rounded-[28px]  flex flex-col gap-2 border relative w-52`}
                >
                  <button
                    className="flex home-custom-navs  items-center justify-center    py-2  z-10 gap-1"
                    onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
                  >
                    <img
                      src={currentNav.imgSRC}
                      className=" w-[75%]   py-0 h-9 "
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
                    {restOfNavs.map((nav) => (
                      <button className="flex px-4  w-full py-1 " key={nav.id}>
                        <Link href={nav.href}>
                          <img
                            src={nav.imgSRC2}
                            className="-ml-3   h-8 w-full"
                          />
                        </Link>
                      </button>
                    ))}
                    {/* <button className="flex justify-start   w-full items-start ">
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
                    </button> */}
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

          {/* desktop */}
          <motion.div
            animate={{ type: "spring", opacity: 1 }}
            initial={{ opacity: 0.1 }}
            transition={{ duration: 0.9 }}
            className="hidden md:flex w-full flex-col justify-between h-full  container mx-auto px-3"
          >
            <div className=" w-full flex justify-between ">
              <div className="w-6/12    flex justify-between   items-center  ">
                <div
                  className="w-1/4 flex items-center gap-1"
                  onMouseEnter={() => setOpenDesktopSubsidiaryMenu(true)}
                  onMouseLeave={() => setOpenDesktopSubsidiaryMenu(false)}
                >
                  <button className={`px-6 w-full   h-10 relative `}>
                    <Link href={currentNav.href}>
                      <Image
                        src={currentNav.imgSRC2}
                        alt={"img"}
                        className="w-full  "
                        fill
                      />
                    </Link>
                    {/* <div className="right-0 absolute ">
                  
                </div> */}
                  </button>
                  {openDesktopSubsidiaryMenu ? (
                    <HiChevronLeft size={24} color={"black"} />
                  ) : (
                    <HiChevronRight size={24} color={"black"} />
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
                    {restOfNavs.map((nav) => (
                      <NavButton
                        key={nav.id}
                        href={nav.href}
                        title={nav.title}
                        imgSRC={nav.imgSRC2}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-8  w-4/12 items-center justify-end   text-primary">
                <div className="flex gap-12  ">
                  <CustomNavButton2
                    href="/business"
                    title="Business"
                    active={pageName === "Business"}
                    textColorWhite={false}
                  />
                  <CustomNavButton2
                    href="/about"
                    title="About"
                    active={pageName === "About"}
                    textColorWhite={false}
                  />
                  <CustomNavButton2
                    href="/career"
                    title="Career"
                    active={pageName === "Career"}
                    textColorWhite={false}
                  />
                </div>
                <button onClick={() => setOpenSiteMenu((prev) => !prev)}>
                  <img
                    src="/assets/icons/close-red.svg"
                    className="h-10 "
                    alt="menu icon"
                  />
                </button>
              </div>
            </div>

            <div className=" w-full h-full flex flex-col justify-center ">
              <div className=" mx-[10rem] flex justify-between ">
                <div className="flex flex-col gap-6 ml-14">
                  <CustomNavList title="Solutions" href="/business" />
                  <CustomNavList title="Business" href="business" />
                  <CustomNavList title="Green Business" href="business" />
                  <CustomNavList title="Media" href="/" />
                  <CustomNavList title="About" href="about" />
                </div>

                <div className="text-primary  w-1/4 flex flex-col justify-end -mb-[10%]  tracking-wide">
                  <div className="w-full flex gap-6 flex-col text-2xl">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/icons/arrow-right-blue.svg"
                        alt="get directions"
                        className="-ml-10"
                      />
                      <h1 className="uppercase  text-xl font-medium tracking-widest">
                        Contact Us
                      </h1>
                    </div>
                    <h1 className="text-lg">Broadspectrum Ltd.</h1>

                    <div className="flex gap-1 flex-col  ">
                      <h1 className="uppercase  text-lg font-medium">
                        HEAD OFFICE
                      </h1>
                      <h1 className="text-lg">
                        No 24 Botwe <br /> Dzorwulu Road, <br />
                        Dzorwulu-Accra
                      </h1>
                    </div>

                    <div className="flex gap-2 flex-col text-lg  h-full">
                      <h1>+233(0) 593 808 064</h1>
                      <h1>contact@bsl.com.gh</h1>
                    </div>

                    <motion.div
                      className="flex gap-4 items-center"
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <img
                        src="/assets/icons/arrow-right-blue.svg"
                        alt="get directions"
                      />
                      <h1 className="uppercase tracking-widest text-xl ">
                        GET DIRECTIONS{" "}
                      </h1>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
