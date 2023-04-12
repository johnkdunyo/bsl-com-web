import React, { useState } from "react";

const SingleComponent = ({
  title,
  list,
}: {
  title: string;
  list?: string[];
  imageURL?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className="h-[25rem] w-full hidden sm:block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <div className="border border-[#82AEC9] w-full rounded-[40px] p-10 h-full bg-[url('/assets/img/business/computingSection/image1.png')] border-transparent">
            <div className="flex flex-col   h-full justify-end gap-5">
              <div className="h-full  flex items-end">
                <h1
                  className={`text-4xl font-medium my-2  leading-[2.8rem] ${
                    list && "-mb-14 "
                  }`}
                >
                  {title}
                </h1>
              </div>
              {list && (
                <ul className="h-full text-2xl  flex flex-col mb-2 justify-end">
                  {list.map((list, _x) => (
                    <li className="flex items-center gap-1" key={_x}>
                      <img
                        src="/assets/icons/directions-right.svg"
                        alt="get directions"
                        className="w-4"
                      />
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="border border-[#82AEC9] w-full rounded-[40px] p-10 h-full  ">
            <div className="flex flex-col   h-full">
              <div className="h-full  flex ">
                <h1 className="text-4xl font-medium mt-2 leading-[2.8rem]">
                  {title}
                </h1>
              </div>
              {list && (
                <ul className="h-full text-2xl  flex flex-col ">
                  {list.map((list, _x) => (
                    <li className="flex items-center gap-1" key={_x}>
                      <img
                        src="/assets/icons/directions-right.svg"
                        alt="get directions"
                        className="w-4"
                      />
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="sm:hidden h-[25rem] w-full border border-[#82AEC9] rounded-[45px] bg-[url('/assets/img/business/computingSection/image1.png')] relative">
        <div className="flex flex-col justify-end h-full">
          <div className="h-[32%]  bg-[#0C233E]  border-[#82AEC9] rounded-bl-[45px] rounded-br-[45px] p-8">
            <h1
              className={`text-3xl font-medium -mt-5  leading-[2.4rem] ${
                list && " absolute top-[50%]  "
              }`}
            >
              {title}
            </h1>
            {list && (
              <ul className="h-full text-[1.3rem] -mt-5 flex flex-col ">
                {list.map((list, _x) => (
                  <li className="flex items-center gap-2" key={_x}>
                    <img
                      src="/assets/icons/directions-right.svg"
                      alt="get directions"
                      className="w-4"
                    />
                    {list}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const ComputingNetworkingSection = () => {
  return (
    <div className="bg-[#0C233E] py-36">
      <div className="custom-container2 flex flex-col gap-10">
        <div className="">
          <h1 className="headerText1">
            Computing & <br />
            Networking Solution
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 my-10">
          <SingleComponent
            title="Supply of IT equipment"
            list={["Server", "Routers", "Switches, etc"]}
          />
          <SingleComponent title="SD – WAN Design and Deployment" />
          <SingleComponent title="Network Design and Deployment" />
        </div>
      </div>
    </div>
  );
};

export default ComputingNetworkingSection;
