import React from "react";

const TrustedBy = () => {
  return (
    <section className=" bg-[#FFFFFF]">
      <div className="py-20 flex flex-col justify-center items-center ">
        <div className="relative w-full flex justify-center">
          <div className="w-full border border-[#1D365A]" />
          <h1 className="text-[#1D365A] uppercase text-center font-medium tracking-widest text-lg  sm:text-2xl w-fit px-12 absolute -top-3 bg-white">
            Trusted by
          </h1>
        </div>

        {/* mobile */}
        <div className="sm:hidden mt-14 custom-container flex flex-col  w-full gap-10">
          <div className="flex w-full justify-center gap-6">
            <img src="/assets/icons/partners/gcb.svg" />
            <img src="/assets/icons/partners/mtn.svg" />
            <img src="/assets/icons/partners/nhis.svg" />
          </div>
          <div className="flex w-full justify-center gap-4">
            <img src="/assets/icons/partners/nedco.svg" />
          </div>
        </div>

        {/* destkop */}
        <div className="hidden mt-14 custom-container sm:flex flex-col  w-full gap-10">
          <div className="flex w-full justify-center gap-20 ">
            <img src="/assets/icons/partners/nedco.svg" />
            <img src="/assets/icons/partners/gcb.svg" className=" p-5" />
            <img src="/assets/icons/partners/mtn.svg" />
            <img src="/assets/icons/partners/nhis.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
