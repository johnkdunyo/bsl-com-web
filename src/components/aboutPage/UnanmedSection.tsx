/* eslint-disable import/no-unresolved */

import React, { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SingleComponent = ({
  imageURL,
  description,
}: {
  imageURL: string;
  description: string;
}) => {
  return (
    <div className=" border-l-2 border-[#82AEC9]  w-full px-7">
      <div className="flex flex-col  gap-2 ">
        <img src={`/assets/img/about/${imageURL}.png`} alt={imageURL} />
        <p className="text-[#1D365A] paragraphText1 ">{description}</p>
      </div>
    </div>
  );
};

const UnanmedSection = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="flex flex-col  relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          spaceBetween={0}
          cssMode={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.1}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation]}
          keyboard={true}
          className="w-full"
        >
          <SwiperSlide>
            <SingleComponent
              imageURL="about2"
              description="Broadspectrum designed and implemented a Software-Defined Wide Area
          Network as an overlay network to provide intelligent traffic steering
          over GCB Bank’s MPLS and LTE WAN links."
            />
          </SwiperSlide>

          <SwiperSlide>
            <SingleComponent
              imageURL="about3"
              description="Broadspectrum designed and implemented a Software-Defined Wide Area
          Network as an overlay network to provide intelligent traffic steering
          over GCB Bank’s MPLS and LTE WAN links."
            />
          </SwiperSlide>

          <SwiperSlide>
            <SingleComponent
              imageURL="about4"
              description="Broadspectrum designed and implemented a Software-Defined Wide Area
          Network as an overlay network to provide intelligent traffic steering
          over GCB Bank’s MPLS and LTE WAN links."
            />
          </SwiperSlide>

          <SwiperSlide>
            <SingleComponent
              imageURL="about5"
              description="Broadspectrum designed and implemented a Software-Defined Wide Area
          Network as an overlay network to provide intelligent traffic steering
          over GCB Bank’s MPLS and LTE WAN links."
            />
          </SwiperSlide>

          {/* <div className="border border-red-500  absolute bottom-0">
            <div className="flex gap-2">
              <button className="swiper-button-prev border">
                <img
                  src="/assets/icons/navs/left-blue.svg"
                  className="w-[95%] sm:w-full"
                />
              </button>
              <button className="swiper-button-next ">
                <img
                  src="/assets/icons/navs/right-blue.svg"
                  className="w-[95%] sm:w-full"
                />
              </button>
            </div>
          </div> */}
        </Swiper>

        {/* <div className="slider-controler">
          ..
          <div className="swiper-button-prev slider-arrow">
            <img
              src="/assets/icons/navs/right-blue.svg"
              className="w-[95%] sm:w-full"
            />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img
              src="/assets/icons/navs/right-blue.svg"
              className="w-[95%] sm:w-full"
            />
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </div>
    </div>
  );
};

export default UnanmedSection;
