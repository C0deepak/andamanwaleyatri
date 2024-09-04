/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const HotelBooking = () => {
    return (
        <div>
            <QuickLinksBg text={'Hotel Booking'} img={'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Hotel Booking
                    </h1>

                    <p>Our Hotel Booking service in the Andaman and Nicobar Islands offers a seamless way to secure the perfect accommodation for your stay. Whether you prefer luxury resorts, budget-friendly hotels, or cozy beachfront cottages, we have a wide selection of options to suit your preferences and budget. Each property is carefully selected to provide you with comfort, excellent service, and easy access to the islands’ top attractions. With our hassle-free booking process, competitive rates, and insider knowledge of the best stays, we ensure your island experience is restful, relaxing, and memorable. Let us help you find your ideal home away from home!</p>
                </div>
            </div>
        </div>
    )
}

export default HotelBooking