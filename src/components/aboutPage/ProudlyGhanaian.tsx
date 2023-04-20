import React from "react";

const ProudlyGhanaian = () => {
  return (
    <section className=" bg-white ">
      <div className="custom-container h-full flex flex-col sm:flex-row justify-between py-10 gap-16 ">
        <div className=" w-full  -mt-24 sm:-mt-[9rem] sm:order-last z-10">
          <img src="/assets/img/about/about1.png" className="w-full h-full" />
        </div>
        <div className="  w-full flex justify-center items-center ">
          <div className="flex flex-col gap-4  sm:-mt-10">
            <h1 className="text-[#1D365A] headerText1">Proudly Ghanaian</h1>
            <p className="text-[#1D365A] paragraphText1">
              Broadspectrum Limited is a Ghanaian information communication
              technology company that is active in the technological industry.
              It has partnered with GCB Bank Limited to launch the first
              bank-backed mobile money service in Ghana and has over 400,000
              users. In partnership with the government of Ghana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProudlyGhanaian;
