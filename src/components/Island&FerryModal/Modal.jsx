import { useEffect } from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, closeModal, data }) => {
  console.log(data);

  if (!isOpen) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const scheduleLinks = [
    {
      id: 1,
      link: 'https://www.andaman.gov.in/interisland-shipping-schedule',
    },
    {
      id: 2,
      link: 'https://andaman.gonautika.com/fare-and-schedule/',
    },
    {
      id: 3,
      link: 'https://andaman.gonautika.com/fare-and-schedule/',
    },
    {
      id: 4,
      link: 'https://www.eternalandamans.com/ferries/green-ocean',
    },
    {
      id: 5,
      link: 'https://www.eternalandamans.com/ferries/itt-majestic',
    },
    {
      id: 6,
      link: 'https://www.makruzz.com/cms/fares',
    },
  ];

  const dataId = data.id;

  const renderedLinks = scheduleLinks.map((linkItem) => {
    if (linkItem.id === dataId) {
      return (
        <Link
          key={linkItem.id}
          to={linkItem.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          See the Schedule Here
        </Link>
      );
    }
    return null; // Return null if no match is found for the current link item
  });

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={handleContentClick}>
          <div className="flex text-xl justify-between pb-4 border-b border-slate-200">
            <h1>{data.name}</h1>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="flex flex-col items-center">
            <img src={data.imgLink} alt="" className="modal-image" />
            <h1 className="text-2xl pt-4 font-medium text-center">
              {data.name}
            </h1>
            <p className="pt-2 text-sm mx-auto text-center md:w-[479px] pb-3 text-slate-600">
              {data?.packageFeature}
            </p>
          </div>
          {data.activity1Name && (
            <h2 className="font-semibold text-center text-2xl">
              Places to visit & Activity
            </h2>
          )}
          {data?.activity1Name ? (
            <div className="flex flex-col justify-center items-center text-center">
              {' '}
              <div>
                <h1 className="text-lg pt-4 font-medium">
                  {data?.activity1Name ? '1.' : ''} {data?.activity1Name}
                </h1>
                <img src={data?.imgLink1} alt="" className="modal-image" />
                <p className="pt-3 text-slate-600 text-sm mx-auto md:w-[479px] pb-3">
                  {data?.activity1Description}
                </p>
              </div>
              <div>
                <h1 className="text-lg pt-4 font-medium">
                  {data?.activity2Name ? '2.' : ''} {data?.activity2Name}
                </h1>
                <img src={data?.imgLink2} alt="" className="modal-image" />
                <p className="pt-3 text-slate-600 text-sm mx-auto md:w-[479px]">
                  {data?.activity2Description}
                </p>
              </div>
              <div>
                <h1 className="text-lg pt-4 font-medium">
                  {data.activity3Name ? '3.' : ''} {data?.activity3Name}
                </h1>
                <img src={data?.imgLink3} alt="" className="modal-image" />
                <p className="pt-3 text-slate-600 text-sm mx-auto md:w-[479px] pb-3">
                  {data?.activity3Description}
                </p>
              </div>
              <div>
                <h1 className="text-lg pt-4 font-medium">
                  {data.activity4Name ? '4.' : ''} {data?.activity4Name}
                </h1>
                <img src={data?.imgLink4} alt="" className="modal-image" />
                <p className="pt-3 text-slate-600 text-sm mx-auto md:w-[479px] pb-3">
                  {data?.activity4Description}
                </p>
              </div>
              <div>
                <h1 className="text-lg pt-4 font-medium">
                  {data.activity5Name ? '5.' : ''} {data?.activity5Name}
                </h1>
                <img src={data?.imgLink5} alt="" className="modal-image" />
                <p className="text-slate-600 pt-3 text-sm mx-auto md:w-[479px]">
                  {data?.activity5Description}
                </p>
              </div>
              {data.imgLink2
                ? '-----------------------------------------------'
                : ''}
              <p className="pt-3 text-slate-600 text-sm mx-auto md:w-[479px] pb-3">
                {data?.packageDescription}
              </p>
            </div>
          ) : (
            <h1 className="bg-red-500"></h1>
          )}
          {data?.activity1Name || scheduleLinks[0].link ? (
            ''
          ) : (
            <div className="flex justify-center items-center border-b border-slate-200 pb-4 text-[#01b3a7] text-center text-sm">
              {renderedLinks.length > 0
                ? renderedLinks
                : 'No schedule link found for this activity'}
            </div>
          )}
          <div className="flex justify-around pt-4 ">
            <Link
              to="/Contact"
              target="_blank"
              className="border border-[#01b3a7] p-4 transition-colors hover:bg-[#01b3a7] hover:text-white"
            >
              Enquire Now
            </Link>
            <button
              onClick={closeModal}
              className="border py-1 px-3 bg-slate-300 text-black"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
