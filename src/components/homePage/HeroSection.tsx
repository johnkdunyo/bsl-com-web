import React, { useState } from "react";
import Lottie from "react-lottie";
import ActiveLottieLoader from "../../../public/assets/lottie/loader/active-loader.json";
import InactiveLottieLoader from "../../../public/assets/lottie/loader/inactive-loader.json";
import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";

const CustomLottieLoader = ({ status }: { status: "active" | "inactive" }) => {
  const defaultLottieOptions = {
    loop: true,
    autoPlay: true,
    animationData:
      status === "active" ? ActiveLottieLoader : InactiveLottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="-ml-4">
      <Lottie options={defaultLottieOptions} height={50} width={50} />
    </div>
  );
};

const HeroSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };
  return (
    <section className="  h-[88vh] sm:h-[100vh] relative ">
      <div className="absolute inset-0   bg-video   ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          playsInline
        >
          <source src="/assets/videos/homepage.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative  h-full  flex flex-col   justify-end gap-8 sm:gap-20">
        <div className=" container mx-auto text-white flex h-full px-4 sm:px-0 ">
          <div className="  w-full  sm:w-1/2 flex  flex-col justify-end ml-0 sm:ml-12 gap-8 sm:gap-16 ">
            <div className=" flex flex-col gap-8 sm:gap-10 pt-10">
              <div className="flex justify-start  items-start -gap-1 -mb-12">
                <CustomLottieLoader status={"active"} />
                <CustomLottieLoader status={"inactive"} />
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold   mr-6 leading-10">
                We are Engineering Africa&apos;s Digital Future
              </h2>
              <p className="flex sm:hidden text-2xl sm:text-3xl  ">
                We&apos;re offering 360 digital <br />
                solutions Globally from African by Africans.
              </p>

              <p className="hidden sm:flex text-2xl sm:text-3xl  ">
                We&apos;re offering 360 digital solutions <br />
                Globally from African by Africans.
              </p>
            </div>

            <div className=" flex justify-end sm:justify-start ">
              <button>
                <img src="/assets/icons/nav-left.svg" className=" w-2/3" />
              </button>

              <button>
                <img src="/assets/icons/nav-right.svg" className="w-2/3" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6 pb-0 sm:pb-10">
          <button>
            <Lottie options={lottieDefaultOptions} height={160} width={160} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
