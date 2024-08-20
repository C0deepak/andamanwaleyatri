import SoloTripPlan from 'public/assets/images/solo.png';

const PackageModal = ({ item, closeModal }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-50 overflow-y-scroll"
      onClick={closeModal}
    >
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className="bg-white rounded-md transition-transform duration-300 transform pb-4 max-sm:w-[90%]"
        onClick={handleModalClick}
        style={{ minHeight: '70vh', maxHeight: '92vh', overflowY: 'auto' }}
      >
        <div className="sm:min-w-[500px]">
          <div className="flex justify-between items-center border-b-[1px] border-gray-300">
            <p className="text-xl text-[#151515] sm:px-5 sm:py-4 px-3 py-2">
              Package Details
            </p>
            <button
              className="sm:px-5 sm:py-4 text-[24px] text-[#151515] font-Ubuntu_Mono px-3 py-2"
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <div className="p-4 sm:max-w-[500px] max-w-full mx-auto">
            <img src={SoloTripPlan} width={5488} height={3659} className="" />
            <h5 className="text-center font-bold text-xl tracking-wider mt-4">
              {item?.duration}
            </h5>
            {item?.totalCost ? null : (
              <p className="text-center mt-4 text-gray-700 text-[16px]">
                {item?.description}
              </p>
            )}
            <h5 className="text-center text-2xl mt-4">Overview</h5>
            {item.overview
              ? item?.overview.map((data) => (
                  <p className="text-center mt-4 text-gray-600">{data}</p>
                ))
              : null}
          </div>
          <div className="flex w-full items-center justify-evenly border-t-[1px] border-gray-300 sm:pt-4 pt-2 sm:mb-0 -mb-2">
            <Link
              to={'/Contact'}
              rel="noreferrer"
              target="_blank"
              className="text-[#151515] border-2 border-[#01b3a7] py-[12px] px-[23px]"
            >
              Enquire Now
            </Link>
            <button
              className="px-[12px] py-[6px] text-[16px] text-white bg-[#6c757d] rounded-md font-montserrat"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
