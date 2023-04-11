import React from "react";

const DataCenterSection = () => {
  return (
    <section className="bg-[#AB2346] pb-16 sm:pb-0">
      <div className="custom-container2 ">
        <div className="flex flex-col sm:flex-row gap-10 justify-between ">
          <div className=" -mt-28 sm:-my-16 w-full sm:order-last   sm:w-[95%]">
            <img
              src="/assets/img/business/picture2.png"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex  justify-center items-center ">
            <div className=" flex flex-col gap-6 sm:gap-10">
              <h1 className="headerText1">Data Centre Design and Deployment</h1>
              <p className="paragraphText1">
                Data center design serves as they key design phase of data
                center development, where system architects create a documented
                and diagrammatic, logical view of a data center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;
