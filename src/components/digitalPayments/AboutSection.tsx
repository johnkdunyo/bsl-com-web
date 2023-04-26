import React from "react";
import { animate, motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      className=" bg-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // whileFocus={}
    >
      <div
        className="text-center custom-container2 flex flex-col justify-between gap-10 sm:gap-20 max-w-4xl"
        data-aos="fade-up"
      >
        <h1 className="text-purple font-medium text-xl  tracking-widest">
          A SUBSEDIARY OF BROADSPECTRUM
        </h1>

        <div className="flex items-center justify-center mt-10 ">
          <h1 className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
            Safely & securely accept payments, online now and in person.
          </h1>
        </div>

        <div className="">
          <div className="text-[#606060] paragraphText1">
            We built Broadspectrum Digital Payments to meet any business case.
            Count on us for the platform, solution and expertise you need to
            solve your most pressing payments needs.
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
