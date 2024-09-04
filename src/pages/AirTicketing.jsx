/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const AirTicketing = () => {
    return (
        <div>
            <QuickLinksBg text={'Air Ticketing'} img={'https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Air Ticketing
                    </h1>

                    <p>Our Air Ticketing service offers a quick and reliable way to book flights to and from the Andaman and Nicobar Islands. Whether you&apos;re flying domestically or internationally, we provide access to a wide range of airlines and routes, ensuring you find the best flight options to suit your schedule and budget. From economy to premium class, we handle everything from ticket reservations to seat selection, making the booking process stress-free. Count on us for timely updates, competitive fares, and personalized support to ensure your air travel experience is smooth and convenient. Let us handle your journey while you enjoy the beauty of the islands!</p>
                </div>
            </div>
        </div>
    )
}

export default AirTicketing