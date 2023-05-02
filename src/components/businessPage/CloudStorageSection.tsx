import React from "react";

const CloudStorageSection = () => {
  return (
    <section className=" bg-white pb-40 ">
      <div className="custom-container2 h-full flex flex-col md:flex-row justify-between py-10 md:py-20 gap-16  ">
        <div className=" w-full  -mt-24 md:-mt-[0rem] md:order-last border">
          <img
            src="/assets/img/business/datacenter2.jpeg"
            className="w-full md:h-full object-cover h-[30rem]"
          />
        </div>
        <div className="  w-full flex justify-center items-center text-[#1D365A] ">
          <div className="flex flex-col gap-6  ">
            <h1 className="headerText1">Cloud and Storage Solutions</h1>

            <h1 className="text-xl font-medium tracking-wider mt-4 uppercase">
              STORAGE SOLUTIONS FOR
            </h1>

            <div className="flex flex-col border-[#1D365A] border-t ">
              <div className="text-3xl md:text-5xl font-medium py-5 border-b border-[#1D365A]">
                <p>Datacenter</p>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <p>Disaster Recovery and Backups</p>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <p>Customized Digital Market place</p>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <p>Banking/Payment Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudStorageSection;
