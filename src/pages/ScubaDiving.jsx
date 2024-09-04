/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const ScubaDiving = () => {
    return (
        <div>
            <QuickLinksBg text={'Scuba Diving'} img={'https://images.unsplash.com/photo-1616690571998-85f9c9d89a81?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Scuba Diving
                    </h1>

                    <p>Experience the underwater wonders of the Andaman and Nicobar Islands with our Scuba Diving service. Whether you&apos;re a beginner or an experienced diver, we offer guided diving adventures that allow you to explore vibrant coral reefs, swim alongside colorful marine life, and discover the hidden treasures of the ocean. Our certified instructors ensure that you dive safely while fully enjoying the beauty of the islands&apos; crystal-clear waters. With world-class dive sites, rich biodiversity, and top-quality equipment, scuba diving in the Andamans is an unforgettable experience for adventure seekers and nature lovers alike!</p>
                </div>
            </div>
        </div>
    )
}

export default ScubaDiving