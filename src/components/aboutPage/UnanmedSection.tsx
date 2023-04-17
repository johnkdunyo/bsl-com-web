/* eslint-disable import/no-unresolved */

import React, { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

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
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="flex flex-col  relative ">
        <div className="flex flex-col justify-between gap-8">
          <Swiper
            onBeforeInit={onBeforeInit}
            spaceBetween={0}
            cssMode={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.1}
            loop={false}
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
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
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
          </Swiper>

          <div className=" custom-container flex justify-start gap-4    w-full sm:order-first sm:justify-end ">
            <button
              className=" z-10 w-14 h-14 sm:w-16 sm:h-16"
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <img
                src="/assets/icons/navs/left-blue.svg"
                className=" w-full "
              />
            </button>

            <button
              className=" z-10 w-14 h-14 sm:w-16 sm:h-16"
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <img src="/assets/icons/navs/right-blue.svg" className="w-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnanmedSection;
