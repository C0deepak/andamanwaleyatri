/* eslint-disable no-unused-vars */
import React from 'react'
import QuickLinksBg from '../components/Island/QucikLinksBg'

const Kayaking = () => {
    return (
        <div>
            <QuickLinksBg text={'Kayaking'} img={'https://images.unsplash.com/photo-1691804462702-fce0e544f10d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            <div className="flex justify-center items-center md:px-20 px-4 pb-16">
                <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
                    <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
                        Kayaking
                    </h1>

                    <p>Explore the serene waters of the Andaman and Nicobar Islands with our Kayaking service. Paddle through mangrove forests, tranquil lagoons, and picturesque coastlines as you immerse yourself in the islands&apos; natural beauty. Whether you&apos;re a beginner or an experienced kayaker, this peaceful yet adventurous activity offers a unique perspective of the islands&apos; stunning landscapes and vibrant ecosystems. Glide through the water at your own pace, spot exotic birds, and enjoy the soothing sounds of nature. Kayaking in the Andamans is a perfect way to connect with nature and experience the tranquility of the islands.</p>
                </div>
            </div>
        </div>
    )
}

export default Kayaking