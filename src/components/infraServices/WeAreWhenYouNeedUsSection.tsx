import React from "react";

const WeAreWhenYouNeedUsSection = () => {
  return (
    <section className="bg-[#F8F8F8] -mb-1">
      <div className="h-full w-full flex flex-col md:flex-row custom-container pt-20 gap-16 md:gap-10">
        <div className="text-center md:text-left w-full md:order-last  flex items-center">
          <h1 className="text-[2.9rem] md:text-8xl leading-[4rem] md:leading-[7rem] text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#1D365A] to-[#AB2346] px-6 sm:px-0 ">
            We are there when you need us
          </h1>
        </div>
        <div className="w-full h-full ">
          <img src="/assets/img/isg/weready.png" alt="we are ready image" />
        </div>
      </div>
    </section>
  );
};

export default WeAreWhenYouNeedUsSection;
