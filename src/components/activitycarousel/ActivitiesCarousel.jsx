"use client";
import { useEffect, useState } from "react";
import {
  Bike,
  LandPlot,
  Landmark,
  Palmtree,
  Ship,
  Wine,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ActivitiesCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 960) {
        setSlidesPerView(4);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-[20vh] min-h-[20vh] mt-16 xl:px-20 md:px-14 px-8 lexs:px-4">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation
        rewind="true"
        modules={[Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-size": "24px",
          "--swiper-navigation-color": "#525252",
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <Wine size={"70px"} className="text-emerald-700 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[7px]"></div>
            <p className="font-semibold text-center">WINES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <Bike size={"70px"} className="text-emerald-700 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[7px]"></div>
            <p className="font-semibold text-center">SPORTS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <Ship size={"70px"} className="text-emerald-700 ml-3 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[18px]"></div>
            <p className="font-semibold text-center">Experiences</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <Palmtree size={"70px"} className="text-emerald-700 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[5px]"></div>
            <p className="font-semibold text-center">Beaches</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <LandPlot size={"70px"} className="text-emerald-700 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[8px]"></div>
            <p className="font-semibold text-center">Play</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col gap-y-2 justify-center relative">
            <Landmark size={"70px"} className="text-emerald-700 pl-2 z-10" />
            <div className="h-[55px] w-[55px] rounded-full bg-yellow-400 absolute mb-[30px] ml-[11px]"></div>
            <p className="font-semibold text-lg text-center">Museums</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
