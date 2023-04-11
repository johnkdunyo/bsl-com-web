import React from "react";

const HeroSection = () => {
  return (
    <section className=" home-hero h-[90vh] sm:h-[95vh]   top-0    ">
      <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center items-end  pb-10  relative">
        {/* mobile */}
        <div className="sm:hidden  w-full    flex  flex-col items-center justify-center text-center   pb-10  ">
          <div className="max-w-3xl flex flex-col gap-6">
            <h2 className="headerText1 ">
              Delivering Value through Products, Services and Customized
              Solutions.
            </h2>
            <p className="flex sm:hidden text-2xl sm:text-3xl  ">
              At Broadspectrum, our comprehensive technological solutions help
              companies achieve greater success.
            </p>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden sm:flex flex-col  h-full w-full custom-container justify-center items-center">
          <div className=" max-w-4xl flex flex-col items-center gap-10 mt-20">
            <h2 className="headerText1 text-center">
              We are Engineering Africa&apos;s Digital Future
            </h2>
            <p className="flex text-2xl sm:text-3xl text-center   ">
              We&apos;re offering 360 digital solutions <br />
              Globally from African by Africans.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex absolute  w-full  justify-between">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[#AB2346] font-medium text-xl uppercase tracking-widest">
              Get to know us
            </h1>
          </div>
          <div className="w-full">{""}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
