import React from "react";

const MissionVission = () => {
  return (
    <section className=" mission-section h-[75vh] sm:h-[50vh]">
      <div className="custom-container flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 h-full w-full">
        <div className="w-full h-full flex flex-col justify-center gap-3 pl-0 sm:pl-20">
          <h1 className="font-medium text-3xl mt-0 sm:-mt-6">Mission</h1>
          <p className="text-lg">
            To be Africa’s communication and digital partner of choice.
          </p>
        </div>

        <div className="w-full h-full flex flex-col justify-center gap-3 pl-0 sm:pl-20">
          <h1 className="font-medium text-3xl">Vision</h1>
          <p className="text-lg">
            To be a world class communication and Digital partner of choice from
            Africa by Africans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
