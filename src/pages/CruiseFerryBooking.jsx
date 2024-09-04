/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const CruiseFerryBooking = () => {
    return (
        <div>
            <QuickLinksBg text={'Cruise Ferry Booking'} img={'https://images.unsplash.com/photo-1559600088-01f7d8974913?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Cruise Ferry Booking
                    </h1>

                    <p>Our Cruise Ferry Booking service offers a seamless way to explore the breathtaking Andaman and Nicobar Islands by sea. Whether you&apos;re traveling between islands or embarking on a scenic cruise, we provide access to the best ferry and cruise options to suit your travel needs. With a variety of vessels ranging from luxury cruises to fast ferries, we ensure comfort, safety, and convenience throughout your journey. Enjoy stunning ocean views, fresh sea breezes, and a relaxing voyage as you hop between islands or sail to the mainland. Let us handle the logistics while you enjoy the enchanting beauty of the Andaman waters!</p>
                </div>
            </div>
        </div>
    )
}

export default CruiseFerryBooking