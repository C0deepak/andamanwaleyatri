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

const HeroCarousel = () => {

    const BannerData = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        }
    ]
    return (
        <div className='pt-8 pb-16 sm:py-8'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
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
                    <SwiperSlide key={banner.id} className='w-full h-full'><img src={`${banner.img}`} alt="" className='w-full h-full object-cover' /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroCarousel