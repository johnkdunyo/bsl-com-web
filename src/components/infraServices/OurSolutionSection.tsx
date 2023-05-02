import React from "react";
import useMeasure from "react-use-measure";

// const SingleSection = ({
//   title,
//   description,
//   className,
//   imgURL,
// }: {
//   title: string;
//   description: string;
//   className?: string | string[];
//   imgURL: string;
// }) => {
//   const [container, { height }] = useMeasure();
//   console.log("debug", height);
//   return (
//     <div
//       className={`relative  border-yellow-500 mb-8  ${className}`}
//       style={{ minHeight: `${height + 225}px` }}
//     >
//       <img
//         src={`/assets/img/isg/${imgURL}`}
//         className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
//       />
//       <div
//         className=" h-fit bg-gradient-to-b to-[#1D365A] from-[#AB2346]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
//         ref={container}
//       >
//         <div className=" text-white px-4 flex flex-col gap-6">
//           <h1 className="font-bold text-4xl leading-normal">{title}</h1>
//           <div className="text-base leading-normal">{description}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const SingleSection = ({
  title,
  description,
  className,
  imgURL,
  txtPosition,
}: {
  title: string;
  description: string;
  className?: string | string[];
  imgURL: string;
  txtPosition?: "left" | "right";
}) => {
  const [container, { height }] = useMeasure();
  console.log("debug", height);
  return (
    <>
      <div
        className={`relative  border-yellow-500 mb-8 md:hidden  ${className}`}
        style={{ minHeight: `${height + 225}px` }}
      >
        <img
          src={`/assets/img/isg/${imgURL}`}
          className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
        />
        <div
          className=" h-fit bg-gradient-to-b to-[#1D365A] from-[#AB2346]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
          ref={container}
        >
          <div className=" text-white px-4 flex flex-col gap-6">
            <h1 className="font-bold text-4xl leading-normal">{title}</h1>
            <div className="text-base leading-normal">{description}</div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full w-full justify-between  bg-gradient-to-l to-[#1D365A] from-[#AB2346]  rounded-[80px] p-7  ">
        <div
          className={`text-white w-full    ${
            txtPosition === "right" && "order-last"
          } `}
        >
          <div className="flex flex-col gap-4 justify-center  h-full  px-16 ">
            <h1 className="font-bold text-6xl  leading-[4.5rem]">{title}</h1>
            <div className="text-xl leading-normal">{description}</div>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={`/assets/img/isg/${imgURL}`}
            className="rounded-[80px] object-cover h-[30rem]  w-full   "
          />
        </div>
      </div>
    </>
  );
};

const OurSolutionSection = () => {
  return (
    <section className="py-20  bg-white">
      <div className="custom-container">
        <div className=" w-full">
          <h1 className="text-primary font-bold text-4xl md:hidden">
            Our <br />
            Solutions
          </h1>
          <h1 className="text-primary font-bold text-4xl hidden md:block">
            Our Solutions
          </h1>
          <p className="text-primary mt-10">Text here</p>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-12 md:gap-20 ">
          <SingleSection
            title="Fibre Infrastructure Deployment"
            imgURL="fibre.jpeg"
            description="At ISG, we specialize in providing comprehensive fibre infrastructure deployment services to meet the growing demands of the telecommunications industry. Our team of experts is highly experienced in designing, deploying, and maintaining fibre optic networks, ensuring that our clients receive the highest quality solutions."
          />

          <SingleSection
            title="Microwave Radio Deployment"
            imgURL="microwave.jpg"
            txtPosition={"right"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
          />
          <SingleSection
            title="LAN Infrastructure Deployments"
            imgURL="lan.jpeg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <SingleSection
            title="Data Centre Build and Management"
            imgURL="datacenter.jpeg"
            txtPosition={"right"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <SingleSection
            title="Service Maintenance and Support"
            imgURL="service.jpeg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolutionSection;
