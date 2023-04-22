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
    <section className=" bg-[url('/assets/img/bdp/mobile.jpg')] sm:bg-[url('/assets/img/bdp/main.jpg')] h-[90vh] sm:h-[85vh] md:h-[95vh] bg-cover  bg-center top-0">
      <div className="h-full w-full">
        <div className=" container mx-auto text-white flex flex-col h-full px-4 sm:px-0  justify-center sm:items-end  pb-10  border">
          {/* mobile */}
          <div className="sm:hidden   w-full    flex  flex-col items-center justify-start text-center mt-20 border ">
            <h2 className="headerText1 ">Simple</h2>
            <h1 className="text-xl tracking-widest">paments for everyone</h1>
          </div>

          {/* desktop */}
          {/* <div className="hidden sm:flex flex-col  h-full w-full custom-container justify-center items-center">
            <div className=" max-w-4xl flex flex-col items-center gap-10 mt-20">
              <h2 className="headerText1 text-center">Simple</h2>
              <p className="flex text-[1.7rem] text-center   ">
                We are always looking for new friends
              </p>
            </div>
          </div> */}

          {/* <div className="flex justify-center h-[12%] mb-0 pb-0 sm:pb-10 ">
            <button>
              <Lottie options={lottieDefaultOptions} height={160} width={160} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
