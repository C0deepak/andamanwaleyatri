import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from '../../../public/img/1.webp';
import img2 from '../../../public/img/2.webp';
import img3 from '../../../public/img/3.webp';
import img4 from '../../../public/img/4.webp';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {

    const BannerData = [
        {
            id: 1,
            img: img1,
            heading: 'Discover the Hidden Gems of Andaman',
            para: 'Embark on an unforgettable journey through pristine beaches, lush forests, and serene islands.',
        },
        {
            id: 2,
            img: img2,
            heading: 'Unwind in Luxurious Andaman Hotels',
            para: 'Experience world-class hospitality and comfort at our curated selection of premium resorts.',
        },
        {
            id: 3,
            img: img3,
            heading: 'Your Gateway to Paradise',
            para: 'Find the best flight deals to Andaman and start your adventure with ease and comfort.',
        },
        {
            id: 4,
            img: img4,
            heading: 'Tailored Travel Experiences Await You',
            para: 'From scuba diving to trekking, customize your perfect Andaman getaway with us.',
        }
    ]
    return (
        <div className='pt-8 pb-16 sm:py-8'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full h-[600px] flex items-center justify-center"
                style={{
                    "--swiper-pagination-color": "dodgerblue",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
            >
                {BannerData.map((banner) => (
                    <SwiperSlide key={banner.id} className='w-full h-full'>
                        <img src={`${banner.img}`} alt="" className='absolute top-0 left-0 w-full h-full z-0 object-cover' />
                        <div className='absolute bottom-0 left-0 w-full h-1/2 z-10 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
                        <div className='relative text-white z-20 h-full w-full px-4 py-12 md:p-16 flex flex-col gap-4 justify-end'>
                            <h1 className='font-bold text-3xl md:text-5xl'>{banner.heading}</h1>
                            <p className='font-medium text-base md:text-xl'>{banner.para}</p>
                            <Link
                                to="/packages"
                                className="w-fit px-6 py-3 rounded-md bg-gradient-to-tl from-[#ff503dac] to-[#c30808] text-medium font-poppins font-semibold hover:underline"
                            >
                                Checkout Packages
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroCarousel