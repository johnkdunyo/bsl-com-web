import React from "react";

const MissionVission = () => {
  return (
    <section className=" h-[75vh] sm:h-[50vh] bg-[#000A26] ">
      <div className="custom-container flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 h-full w-full">
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-3 ">
          <h1 className="font-bold text-7xl mt-0 sm:-mt-6 text-[#AB2346]">
            Mission
          </h1>
          <p className="paragraphText1">
            To be Africa’s communication and digital partner of choice.
          </p>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-3">
          <h1 className="font-bold text-7xl mt-0 sm:-mt-6 text-[#AB2346]">
            Vision
          </h1>
          <p className="paragraphText1 px-4 sm:px-0">
            To be a world class communication and Digital partner of choice from
            Africa by Africans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
