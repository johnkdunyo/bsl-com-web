import Image from "next/image";
import React from "react";

const WorkPOSSection = () => {
  return (
    <section className="bg-[url('/assets/img/bdp/mobile-pos-bg.svg')] sm:bg-[url('/assets/img/bdp/pos-bg.svg')] h-[30rem]  sm:h-[80rem] bg-cover  bg-no-repeat   w-full pt-[8rem]  sm:pt-[25rem] bg-white sm:-mt-40 -mt-[7rem]   z-10  ">
      <div className="custom-container ">
        <div className="flex flex-col items-center  h-full">
          <h1 className="text-purple font-bold text-[1.9rem] text-center sm:text-[2.3rem]">
            Work with POS, mobile and web
          </h1>
          <div className=" -mt-20  sm:-mt-[20rem] ">
            <img src="/assets/img/bdp/pos.png" className="" alt="pos image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPOSSection;
