import React from "react";

const HeroSection = () => {
  return (
    <section className=" bg-[url('/assets/img/backgrounds/career.jpeg')] h-[70vh] sm:h-[95vh] bg-cover  bg-left  top-0">
      <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center sm:items-end  pb-10  relative">
        {/* mobile */}
        <div className="sm:hidden border  w-full    flex  flex-col items-center justify-evenly text-center mt-20 ">
          <h2 className="headerText1 ">Careers</h2>

          <h1 className="text-xl tracking-widest">
            We are always looking for new friends
          </h1>
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
      </div>
    </section>
  );
};

export default HeroSection;
