/* eslint-disable react/prop-types */
import { useState } from 'react'
import WaterModal from './WaterModal'

// eslint-disable-next-line react/prop-types
const WaterCard = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    // <div
    //   className={`mt-5 filter w-full sm:w-[48%] md:w-[32%] lg:w-[25.5%] font-roboto rounded-sm shadow-lg shadow-[rgba(0,0,0,0.2)] items-stretch ${
    //     isModalOpen ? 'overflow-hidden' : ''
    //   }`}
    //   onClick={openModal}
    // >
       <div
        className={`card min-h-[510px] min-w-[260px] m-4 rounded-xl shadow-lg hover:shadow-lg hover:cursor-pointer mb-20 ${
        isModalOpen ? 'overflow-hidden' : ''}`}
        onClick={openModal}
      > 
      <img
        src={item.img}
        alt="item-image"
        className="w-full h-[270px] rounded-t-lg"
      />
      <div className="card-body p-5">
        <h1 className="font-bold text-xl mb-4 tracking-wider">
          {!item.heading?item.name:item.heading}
        </h1>
        <p className="text-sm mb-4">{item.shortDescription}</p>
        <h5 className="text-xs text-gray-600">Last updated 3 mins ago</h5>
      </div>
      {/* </div> */}

      {isModalOpen && <WaterModal item={item} closeModal={closeModal} />}
    </div>
  )
}

export default WaterCard
