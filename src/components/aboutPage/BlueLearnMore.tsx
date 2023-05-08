import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const BlueLearnMore = () => {
  return (
    <section className="bleuLearnMore h-[45rem] sm:h-[40rem]">
      <div className="custom-container flex flex-col sm:flex-row  justify-center items-center  gap-10 h-full max-w-7xl ">
        <div className="w-full">
          <Animate.FadeUp>
            <h1 className="headerText1 text-white">
              Leading the way in Fibre infrastructure
            </h1>
          </Animate.FadeUp>
        </div>
        <div className="w-full sm:h-full flex flex-col justify-center">
          <div>
            <Animate.FadeUp>
              <p className="paragraphText1 sm:mt-14">
                Broadspectrum also set up Spectrum Fibre Company Limited to
                deploy ultra-modern fibre infrastructure connecting more than
                100 towns in Ghana. The company is focused on innovation and
                collaboration and has deployed next-generation infrastructure
                for improved customer experience and productivity.
              </p>
            </Animate.FadeUp>

            <button className="custom-button1 my-8">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueLearnMore;
