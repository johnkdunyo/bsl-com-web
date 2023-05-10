import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const AboutSection = () => {
  return (
    <section className="bg-white pb-16">
      <div className="custom-container flex flex-col justify-between py-16  md:py-10 w-full  gap-16">
        <div className="w-full">
          <Animate.FadeUp className="text-ruby font-medium text-xl  text-center tracking-widest w-full">
            A SUBSIDIARY OF BROADSPECTRUM
          </Animate.FadeUp>
        </div>

        <div className=" w-full flex flex-col md:flex-row md:gap-10 gap-0">
          <div className="w-full md:w-3/5">
            <img src="/assets/img/isg/isg1.jpeg" />
          </div>
          <div className="w-full md:w-2/5 mt-[10%]">
            <Animate.FadeUp className="text-primary text-base   leading-relaxed px-2 md:px-0">
              At ISG, we understand the importance of reliable and efficient
              communication networks and that is why we always strive to provide
              the best workable solutions.
            </Animate.FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
