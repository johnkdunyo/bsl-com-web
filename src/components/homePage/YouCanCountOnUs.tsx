import React from "react";

const WhyChooseUsComponent = ({
  imageURL,
  title,
  description,
  orderText,
}: {
  imageURL: string;
  title: string;
  description: string;
  orderText: "first" | "last";
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-24">
      <div className="w-full  flex justify-center">
        <img src={imageURL} className="w-full sm:p-3 md:p-6" />
      </div>

      <div
        className={`flex flex-col justify-center gap-6 w-full order-last ${
          orderText === "first" ? "sm:order-first" : "sm:order-last"
        } `}
      >
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-lg tracking-wide">{description}</p>
      </div>
    </div>
  );
};

const YouCanCountOnUs = () => {
  return (
    <section className="youCanCount-section flex flex-col   pt-20 -mt-10 pb-8">
      <section className="flex w-full flex-col justify-center items-center  container mx-auto px-4 sm:px-0 mt-16 mb-5">
        <div className=" max-w-2xl text-center">
          <h1 className="uppercase text-[#AB2346] text-xl mb-10 tracking-wider font-medium ">
            You can count on us
          </h1>
          <p className="text-white paragraphText1">
            Our determination as a business is to offer world class connectivity
            and digital services to our clients and this has enabled us to build
            a dynamic 360 solution approach for connectivity, digital payment
            services, internet service provision value added and messaging
            services.
          </p>
        </div>
      </section>
      <section className="h-16 sm:h-[7rem]  flex items-center text-clip overflow-hidden  ">
        <h1
          className={`text-[5rem] hover:text-[2.4rem] sm:text-[8rem]  hover:sm:text-[10rem]  w-full text-[#AB2346]  text-center tracking-wider text-clip  items-center flex justify-center`}
        >
          <>Why</>
          <span className="uppercase font-bold mx-4">Choose</span>
          <>us?</>
        </h1>
      </section>

      <section className="flex flex-col custom-container gap-10  my-10 ">
        <WhyChooseUsComponent
          imageURL="/assets/img/whyChooseUs/picture1.png"
          title="We Plan for Success and connect your business to the digital world"
          description="Our team of experts are comprised of specialists with years of
          experience that hail from various backgrounds in the technology
          industry. We identify our clients’ needs through detailed discussions
          and assessments of their business and provide them with our vast
          solutions."
          orderText="last"
        />
        <WhyChooseUsComponent
          imageURL="/assets/img/whyChooseUs/picture2.png"
          title="We Transform"
          description="We assist businesses to have a seamless workflow across all units through our subsidiaries and multiple digital services and solutions."
          orderText="first"
        />
      </section>
    </section>
  );
};

export default YouCanCountOnUs;
