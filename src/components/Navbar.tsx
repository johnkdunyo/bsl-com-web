import Link from "next/link";
import React, { useState } from "react";

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
    | "Career";
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
        active ? "bg-white" : "bg-transparent"
      }  px-6  py-1.5 rounded-[48px]`}
    >
      <Link href={href}>
        <img src={imgSRC} alt={title} />
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
    <button className="hover:bg-gray-800/60 px-2 py-0.5 rounded-[20px]">
      <Link href={href}>
        <h1 className="text-white font-medium text-md ">{title}</h1>
      </Link>
    </button>
  );
};

const Navbar = ({ pageName }: INavbar) => {
  const [openSubsidiaryMenu, setOpenSubsidiaryMenu] = useState<boolean>(false);
  const [openSiteMenu, setOpenSiteMenu] = useState<boolean>(false);
  return (
    <div className="  z-10 mt-0 fixed w-full  top-0   sm:bg-black/80 sm:backdrop-blur-sm opacity-1">
      <div className="container mx-auto px-3 ">
        {/* mobile */}
        <div className="sm:hidden flex justify-between  py-2 items-start  ">
          <div className="flex  gap-1  justify-between">
            {/* <button className="  h-12 w-12 bg-gray-300/20 rounded-full flex justify-center items-center">
              <img src="/assets/icons/home-alt.svg" className="h-3/5 w-3/5 " />
            </button> */}

            <div
              className={` ${
                openSubsidiaryMenu ? "bg-white" : "bg-transparent"
              }  rounded-[28px]  flex flex-col gap-2 `}
            >
              <button
                className="flex home-custom-navs  backdrop-blur-md  items-center justify-center    py-2   "
                onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
              >
                <img
                  src="/assets/icons/bsl-main.svg"
                  className=" w-[85%]   py-0.5 "
                />
              </button>

              <div
                className={`${
                  openSubsidiaryMenu ? "flex" : "hidden"
                }  flex-col gap-2  pb-2`}
              >
                <button className="flex justify-start px-4  w-full items-start ">
                  <img src="/assets/icons/bdp-main.svg" alt="bdp" />
                </button>
                <button className="flex justify-start px-4  w-full items-start ">
                  <img src="/assets/icons/spectrum-main.svg" alt="spectrum" />
                </button>
                <button className="flex justify-start px-4  w-full items-start ">
                  <img src="/assets/icons/isg-main.svg" alt="isg" />
                </button>
              </div>
            </div>
          </div>
          <button onClick={() => setOpenSiteMenu((prev) => !prev)}>
            <img src="/assets/icons/home-2.svg" className="h-4/5" />
          </button>
        </div>

        {/* desktop */}
        <div className="hidden sm:flex justify-between w-full py-2 ">
          <div className="w-6/12   home-custom-navs flex justify-between h-full ">
            <NavButton
              title="BSL Home"
              href="/"
              imgSRC="/assets/icons/bsl-main.svg"
              active={pageName === "BSL Home"}
            />

            <NavButton
              title="BSL Home"
              href="/"
              imgSRC="/assets/icons/spectrum-gray.svg"
              active={pageName === "Spectrum Fibre"}
            />

            <NavButton
              title="Infra Services"
              href="/"
              imgSRC="/assets/icons/isg-gray.svg"
              active={pageName === "Infra Services"}
            />

            <NavButton
              title="Digital Payment"
              href="/"
              imgSRC="/assets/icons/bdp-gray.svg"
              active={pageName === "Digital Payment"}
            />
          </div>

          <div className="flex gap-8  w-4/12 items-center justify-end ">
            <div className="flex gap-12">
              <CustomNavButton2
                href="/"
                title="Business"
                active={pageName === "Business"}
              />
              <CustomNavButton2
                href="/about"
                title="About"
                active={pageName === "About"}
              />
              <CustomNavButton2
                href="/"
                title="Career"
                active={pageName === "Career"}
              />
            </div>
            <button>
              <img src="/assets/icons/home-2.svg" className="h-2/5" />
            </button>
          </div>
        </div>

        {/* nav mobile */}
        <div
          className={` ${
            openSiteMenu ? "flex" : "hidden"
          } bg-white w-full h-[90vh] absolute top-0 left-0 sm:hidden flex container mx-auto px-3 py-2 rounded-bl-[110px] z-30`}
        >
          <div className=" flex w-full justify-between flex-col gap-4 h-full">
            <div className="flex justify-between  items-start  w-full">
              <div className="flex  gap-1  justify-between ">
                <div
                  className={` ${
                    openSubsidiaryMenu ? "bg-white" : "bg-transparent"
                  }  rounded-[28px]  flex flex-col gap-2 border relative `}
                >
                  <button
                    className="flex home-custom-navs  backdrop-blur-md  items-center justify-center    py-2  z-10 "
                    onClick={() => setOpenSubsidiaryMenu((prev) => !prev)}
                  >
                    <img
                      src="/assets/icons/bsl-main.svg"
                      className=" w-[85%]   py-0.5 "
                    />
                  </button>

                  <div
                    className={`${
                      openSubsidiaryMenu ? "flex" : "hidden"
                    }  flex-col gap-2  pb-2 absolute top-8 border-2 bg-white w-full pt-8 rounded-b-[22px] -z-2`}
                  >
                    <button className="flex justify-start px-4  w-full items-start ">
                      <img src="/assets/icons/bdp-main.svg" alt="bdp" />
                    </button>
                    <button className="flex justify-start px-4  w-full items-start ">
                      <img
                        src="/assets/icons/spectrum-main.svg"
                        alt="spectrum"
                      />
                    </button>
                    <button className="flex justify-start px-4  w-full items-start ">
                      <img src="/assets/icons/isg-main.svg" alt="isg" />
                    </button>
                  </div>
                </div>
              </div>

              <button onClick={() => setOpenSiteMenu((prev) => !prev)}>
                <img src="/assets/icons/home-2-close.svg" className="h-4/5" />
              </button>
            </div>

            <div className="px-6 flex flex-col gap-4">
              <Link href="/">
                <h1 className="text-[#1D365A] font-medium text-4xl">
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
              <Link href="/">
                <h1 className="text-[#1D365A] font-medium text-4xl">Career</h1>
              </Link>
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
              <button className="custom-button1">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
