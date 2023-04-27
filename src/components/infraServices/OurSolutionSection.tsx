import React from "react";
import useMeasure from "react-use-measure";

const SingleSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [container, { width }] = useMeasure();
  console.log("debug", width);
  return (
    <div
      className={`relative border border-yellow-500 `}
      style={{ height: `${width + 352}px` }}
    >
      <img
        src="/assets/img/isg/fibre.jpeg"
        className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
      />
      <div
        className=" h-fit bg-gradient-to-b to-[#1D365A] from-[#AB2346]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-10"
        ref={container}
      >
        <div className=" text-white px-4 flex flex-col gap-6">
          <h1 className="font-bold text-4xl leading-normal">{title}</h1>
          <div className="text-base leading-normal">{description}</div>
        </div>
      </div>
    </div>
  );
};

const OurSolutionSection = () => {
  return (
    <section className="py-20 border bg-white">
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

        <div className="mt-20 flex flex-col justify-between gap-12 h-fit">
          <SingleSection
            title="Fibre Infrastructure Deployment"
            description="At ISG, we specialize in providing comprehensive fibre infrastructure deployment services to meet the growing demands of the telecommunications industry. Our team of experts is highly experienced in designing, deploying, and maintaining fibre optic networks, ensuring that our clients receive the highest quality solutions."
          />

          <SingleSection
            title="Microwave Radio Deployment"
            description="text here"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolutionSection;
