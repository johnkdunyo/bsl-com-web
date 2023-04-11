import React from "react";

const HeroSection = () => {
  return (
    <section className=" home-hero h-[98vh] sm:h-[110vh]   top-0    ">
      <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center items-end  pb-16 sm:pb-0  relative">
        {/* mobile */}
        <div className="sm:hidden  w-full    flex  flex-col items-center justify-center text-center   my-4">
          <div className="max-w-3xl flex flex-col gap-6">
            <h2 className="headerText2 ">
              Delivering Value through Products, Services and Customized
              Solutions.
            </h2>
            <p className="flex sm:hidden text-xl leading-8 sm:text-3xl  ">
              At Broadspectrum, our comprehensive technological solutions help
              companies achieve greater success.
            </p>

            <div className="flex justify-center">
              <button>
                <img src="/assets/icons/nav-down.svg" className="w-2/3" />
              </button>
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden sm:flex flex-col  h-full w-full custom-container  items-center ">
          <div className=" max-w-5xl flex flex-col justify-around  items-center gap-10 mt-32 h-full">
            <h2 className="headerText2 text-center">
              Delivering Value through Products, Services and Customized
              Solutions.
            </h2>
            <p className="flex text-xl text-center   ">
              At Broadspectrum, our comprehensive technological <br /> solutions
              help companies achieve greater success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
