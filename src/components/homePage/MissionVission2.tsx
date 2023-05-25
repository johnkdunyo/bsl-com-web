import React, { useEffect } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MissionVission = () => {
  gsap.registerPlugin(ScrollTrigger);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector!("section");

      const stopPanel = sections.findIndex(
        (section: any) => section.dataset.pin
      );
      const stopPanel2 = sections.findIndex(
        (section: any) => section.dataset.pin2
      );

      const tl = gsap
        .timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            scrub: 0.5,
            end: () => "+=" + wrapperRef.current!.offsetWidth,
          },
        })
        .to(sections, {
          xPercent: -(100 * stopPanel),
          duration: stopPanel,
        })
        .to(sectionOneRef.current, {
          duration: 0,
          scale: 1,
        })

        .to(sections, {
          xPercent: -(100 * stopPanel2),
          duration: stopPanel2,
        })
        .to(sectionTwoRef.current, {
          scale: 1,
          duration: 0,
        })
        .to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stopPanel2,
        });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className=" h-[50vh] bg-[#000A26]   hidden sm:flex "
      ref={wrapperRef}
      style={{ width: "200%", flexWrap: "nowrap" }}
    >
      {/* <section className="header w-full h-full flex justify-center items-center "></section> */}
      <section
        className="first w-full h-full flex justify-center items-center "
        data-pin="true"
      >
        <div ref={sectionOneRef} className=" sm:-ml-[30%] ">
          <h1 className="font-bold  md:text-[14rem] text-[#AB2346]">Mission</h1>
          <p className="paragraphText1 text-2xl">
            To be Africa{"'"}s communication and <br /> digital partner of
            choice.
          </p>
        </div>
      </section>
      <section
        className="second w-full h-full flex justify-center items-center "
        data-pin2="true"
      >
        <div ref={sectionTwoRef} className="sm:-ml-[30%]">
          <h1 className="font-bold  md:text-[14rem]  text-[#AB2346]">Vision</h1>
          <p className="paragraphText1 px-4 sm:px-0 text-2xl">
            To be a world class communication and Digital <br />
            partner of choice from Africa by Africans.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionVission;
