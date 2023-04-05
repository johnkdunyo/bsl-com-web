import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SingleSlide = () => {
  return (
    <div className="w-full py-10 bg-transparent sm:w-1/2 z-20">
      <img src="/assets/img/board/razak.png" className=" border" />

      <div className="flex flex-col justify-center border">
        <div className="flex flex-col items-start gap-2 my-2 mx-4">
          <h1 className="text-xl">Razak</h1>
          <h1 className="text-[#82AEC9] text-xl">Group CEO</h1>
          <p className="text-base">
            Razak is the Chief Executive Officer (CEO) of Broadspectrum Limited.
            He is a Founding…
          </p>
          <button className="custom-button1 my-4 text-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const LeadershipTeam = () => {
  return (
    <section className="bg-[#0C233E]">
      <div className="py-10">
        <div className="custom-container ">
          <h1 className="text-[#82AEC9] font-bold text-[3.8rem] sm:text-[9rem] sm:whitespace-nowrap whitespace-pre-line leading-[3.5rem]">
            Leadership Team
          </h1>
        </div>

        <>
          <Swiper
            effect={"coverflow"}
            spaceBetween={4}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 500,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            keyboard={true}
            className=" border border-red-600 "
          >
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default LeadershipTeam;
