/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const CarRental = () => {
    return (
        <div>
            <QuickLinksBg text={'Car Rentals'} img={'https://images.unsplash.com/photo-1529369623266-f5264b696110?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Car Rentals
                    </h1>

                    <p>Our Car Rental service in the Andaman and Nicobar Islands provides you with a hassle-free and comfortable way to explore the islands at your own pace. We offer a wide range of well-maintained vehicles, from compact cars to spacious SUVs, catering to solo travelers, couples, and families alike. Whether you&apos;re planning a sightseeing tour, a trip to the beaches, or a journey through the islands&apos; lush landscapes, our car rental service ensures that you travel in style and convenience. With flexible rental plans, affordable rates, and reliable customer support, we are committed to making your island experience smooth and enjoyable. Explore Andaman and Nicobar with the freedom you deserve!</p>
                </div>
            </div>
        </div>
    )
}

export default CarRental