import React from "react";
import Lottie from "react-lottie";

import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";

const HeroSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };
  return (
    <section className=" bg-[url('/assets/img/bdp/mobile.jpg')] sm:bg-[url('/assets/img/bdp/main.jpg')] h-[98vh] sm:h-[85vh] md:h-[95vh] bg-cover  bg-center top-0">
      <div className="h-full w-full custom-container2 flex flex-col border justify-start pt-[5rem] sm:justify-center  ">
        <div className="  border  border-green-500 mt-[4.8rem] sm:mt-0">
          <div className=" w-full  flex flex-col justify-center items-center sm:items-start  border">
            <h2 className="font-bold  leading-[1.4] sm:leading-[1.2] text-[3rem] sm:text-[8rem] tracking-wide">
              Simple
            </h2>
            <h1 className="text-xl tracking-widest sm:text-2xl sm:mt-3">
              payments for everyone.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
