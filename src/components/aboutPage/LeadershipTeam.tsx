import React, { useRef, useState } from "react";
import { Autoplay, Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import CustomBackground1 from "../animations/CustomBackground1";
import Link from "next/link";

const SingleSlide = ({
  id,
  currentIndex,
  name,
  portfolio,
  shortDescription,
  imageURL,
}: {
  id: number;
  currentIndex: number;
  name: string;
  portfolio: string;
  shortDescription: string;
  imageURL: string;
}) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex-row  bg-transparent z-20  h-[40rem] items-center  ${
        currentIndex !== id && " border-green-500 opacity-40"
      } `}
    >
      <img src={imageURL} className="sm:h-4/5  " />

      <div
        className={` ${currentIndex !== id && "hidden"}
        } flex flex-col justify-center   border-red-400 w-full  `}
      >
        <div
          className="flex flex-col items-start gap-2 my-2 mx-4 sm:w-[24rem] 
       "
        >
          <h1 className="text-xl sm:text-2xl">{name}</h1>
          <h1 className="text-[#82AEC9] text-xl sm:text-2xl">{portfolio}</h1>
          <p className="text-base">{shortDescription}</p>
          <button className="custom-button1 my-4 text-sm">
            <Link href="/about/razak">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const LeadershipTeam = () => {
  const swiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const paginationLabel = React.useRef<HTMLHeadingElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(swiperInstance.realIndex + 1);
  };

  return (
    <section className="bg-[#0C233E] relative sm:py-16">
      <CustomBackground1 />
      <div className="py-10 z-10 relative">
        <div className="  custom-container sm:mt-16 sm:-mb-8">
          <h1 className="text-[#82AEC9] font-bold h-full  text-[3.7rem] sm:text-[10rem] sm:whitespace-nowrap whitespace-pre-line leading-[3.5rem]  opacity-30   ">
            Leadership Team
          </h1>
        </div>

        <>
          <Swiper
            onBeforeInit={onBeforeInit}
            initialSlide={5}
            onActiveIndexChange={updateIndex}
            // cssMode={true}
            effect={"coverflow"}
            spaceBetween={60}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 5000,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            // bigger screens
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 180,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: false,
                },
              },
            }}
            navigation={{
              prevEl: swiperNavPrevRef?.current,
              nextEl: swiperNavNextRef?.current,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            keyboard={true}
            className="w-full   relative"
          >
            <SwiperSlide>
              <SingleSlide
                id={1}
                currentIndex={currentIndex}
                name="Samuel Osew – Kwatia"
                portfolio={"Executive Member"}
                shortDescription={
                  "Razak is the Chief Executive Officer (CEO) of Broadspectrum Limited. He is a Founding…"
                }
                imageURL={"/assets/img/board/sam.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={2}
                currentIndex={currentIndex}
                name="Razak Awudalai"
                portfolio={"Group CE0"}
                shortDescription={
                  "Razak is the Chief Executive Officer (CEO) of Broadspectrum Limited. He is a Founding…"
                }
                imageURL={"/assets/img/board/razak.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={3}
                currentIndex={currentIndex}
                name="Nana Dwemoh Benneh"
                portfolio={"Chairman"}
                shortDescription={
                  "Razak is the Chief Executive Officer (CEO) of Broadspectrum Limited. He is a Founding…"
                }
                imageURL={"/assets/img/board/nana.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                id={4}
                currentIndex={currentIndex}
                name="Kris Senanu"
                portfolio={"Executive Member"}
                shortDescription={
                  "Razak is the Chief Executive Officer (CEO) of Broadspectrum Limited. He is a Founding…"
                }
                imageURL={"/assets/img/board/kris.png"}
              />
            </SwiperSlide>
            <div className=" flex justify-between   absolute top-[50%] bottom-[50%] w-full ">
              <button
                className=" z-10 w-16 h-16 sm:w-20 sm:h-full"
                ref={swiperNavPrevRef}
                onClick={() => swiperRef!.current?.slidePrev()}
              >
                <img src="/assets/icons/nav-left.svg" className=" w-full " />
              </button>

              <button
                className=" z-10 w-16 h-16 sm:w-20 sm:h-full"
                ref={swiperNavNextRef}
                onClick={() => swiperRef!.current?.slideNext()}
              >
                <img src="/assets/icons/nav-right.svg" className="w-full" />
              </button>
            </div>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default LeadershipTeam;
