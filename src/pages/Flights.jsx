import Flightsearchform from './Flightsearchform';
import FlightHero from '../components/FlightHero/FlightHero';
import '../index.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import img from '../assets/images/vistara.jpg';
import img2 from '../assets/images/jet-airways.png';
import img3 from '../assets/images/akasa-air.png';
import img4 from '../assets/images/indigo.png';
import img5 from '../assets/images/spicejet.png';
import img6 from '../assets/images/air-india.png';
import img7 from '../assets/images/go-air.png';

import flightAttractivePic from '../assets/images/flightAttractivePic.gif';

const Flights = () => {
  return (
    <div className="">
      <div className="h-[600px] relative pt-20 bgHero1">
        <img
          src={flightAttractivePic}
          className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
        />
        <FlightHero />
      </div>

      <div className="hidden lg:block md:block pt-3 mb-10">
        <div className="">
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            direction={'horizontal'}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Keyboard, Navigation, Autoplay]}
            className=""
          >
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft fill="black" size={30} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight fill="black" size={50} />
              </div>
            </div>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img2} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img3} className="w-60" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img4} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img5} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img6} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img7} className="w-40" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden md:hidden">
        <div className="">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            direction={'horizontal'}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Keyboard, Navigation, Autoplay]}
            className=""
          >
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <HiArrowLongLeft fill="black" size={80} />
              </div>
              <div className="swiper-button-next slider-arrow">
                <HiArrowLongRight fill="black" size={100} />
              </div>
            </div>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img2} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img3} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img4} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img5} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img6} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-14 mt-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img src={img7} className="w-full h-32" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto w-full mb-14">
        <Flightsearchform />
      </div>
      <div className="flex-col items-center justify-center mx-auto w-3/4 mb-14">
        <p className="font-bold text-3xl text-left w-full">Note below:</p>
        <p className="w-full text-base md:text-base font-bold text-center pt-2 pb-4">
          "This is the best place from where you are gonna get the best and
          cheapest flights of your need."
        </p>
        <p className="w-full text-base md:text-lg font-normal text-center pt-2">
          "As soon as you fill up the form, the Andaman Wale Yatri&apos;s Team
          will reach out to you very soon with an email, whatsapp msg or a call
          for further enquiry of your flight requirements."
        </p>
      </div>
    </div>
  );
};

export default Flights;
