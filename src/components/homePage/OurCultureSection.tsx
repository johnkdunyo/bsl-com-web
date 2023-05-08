import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const SingleSlide = ({
  title,
  description,
  id,
  prevID,
  nextID,
}: {
  title: string;
  description: string;
  id: string;
  prevID: string;
  nextID: string;
}) => {
  return (
    <div
      id={id}
      className="carousel-item relative w-full h-full  flex flex-col -mt-10 sm:mt-0"
    >
      <div className=" flex flex-col w-full justify-between h-full items-center text-center py-2 sm:py-0  ">
        <div className="text-[#0C233E] font-bold text-[2.9rem]  sm:text-[5.3rem] md:text-[6.1rem] lg:text-[7.9rem] xl:text-[10.2rem] 2xl:text-[12rem]  w-full ">
          {title}
        </div>
        <div className="text-base  container mx-auto  leading-6 max-w-xl px-5  w-full ">
          {description}
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[34%] sm:top-[52%]  md:top-[48%]  mx-auto px-5 max-w-6xl">
        <a href={prevID} className="btn sm:btn-lg btn-circle bg-transparent">
          <img src="/assets/icons/nav-left.svg" />
        </a>

        <a href={nextID} className="btn sm:btn-lg  btn-circle bg-transparent">
          <img src="/assets/icons/nav-right.svg" />
        </a>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel w-full h-[19rem] sm:h-[20rem]  md:h-[26rem] py-10 ">
      <SingleSlide
        id="slide1"
        title="Innovation"
        description="We adapt to market trends and foster creativity that challenges
          constraints and drives progress"
        nextID="#slide2"
        prevID="#slide4"
      />
      <SingleSlide
        id="slide2"
        title="Agility"
        description="We see opportunities that adds value by welcoming new perspectives to improve productivity. We don’t stand still!"
        nextID="#slide3"
        prevID="#slide1"
      />
      <SingleSlide
        id="slide3"
        title="Results-Driven"
        description="We are passionate about achieving results and strive for quality in rendering services"
        nextID="#slide4"
        prevID="#slide2"
      />
      <SingleSlide
        id="slide4"
        title="Integrity"
        description="We build trust with our clients and partners by upholding ethical standards"
        nextID="#slide5"
        prevID="#slide3"
      />
      <SingleSlide
        id="slide5"
        title="Team Spirit"
        description="We communicate and work together to offer excellent service to our clients."
        nextID="#slide1"
        prevID="#slide4"
      />
    </div>
  );
};

const OurCultureSection = () => {
  return (
    <section className="bg-[#000026] relative">
      <div className="absolute inset-0   bg-video  top-[30rem] sm:top-[20rem]  ">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/videos/dots.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="custom-container pt-10 flex justify-center relative   pb-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <h1 className="text-[#AB2346] font-medium tracking-widest uppercase">
            <Animate.FadeUp>Our Culture</Animate.FadeUp>
          </h1>
          <p className="text-base tracking-wide leading-7">
            <Animate.FadeUp>
              From our diverse selection of services to our corporate culture
              and relationships, our goal is for all our services to live up to
              the tenets of our Core Values. Because we know that what we do
              everyday determines our reputation, the level of success we
              achieve, and the positive impact we can make in Africa and beyond.
            </Animate.FadeUp>
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default OurCultureSection;
