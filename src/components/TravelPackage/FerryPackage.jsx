import { useState } from 'react';
import Modal from '../Island&FerryModal/Modal';
import neilToHavelock from '../../assets/images/pexels-said-16977633.jpg';
import mak from '../../assets/images/mak.jpg';

const FerryPackage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openModal = (places) => {
    setSelectedPlace(places);
  };

  const closeModal = () => {
    setSelectedPlace(null);
    document.body.style.overflow = 'auto';
  };

  const cruisePackage = [
    {
      id: 1,
      name: 'Makruzz',
      title: 'A Timeless Treasure History Gem',
      imgLink: mak,
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 2,
      name: 'Sea Link Cruise',
      title: 'The Tropical Bliss Island',
      imgLink: 'https://i.ibb.co/gwYJxH1/Sea-Link-Cruise.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 3,
      name: 'Nautika',
      title: "The Nature's Wonder",
      imgLink: 'https://i.ibb.co/2nH50zM/Nautica.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 4,
      name: 'Green Ocean',
      title: 'A Natural Marvel Spot',
      imgLink: 'https://i.ibb.co/yW0YnXB/Green-Ocean.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 5,
      name: 'ITT Majestic',
      title: 'A Hidden Heaven',
      imgLink: 'https://i.ibb.co/0XCVkMf/ITTMajestic.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },

    {
      id: 6,
      name: 'Makkruz Gold',
      title: "A Nature's Retreat",
      imgLink: 'https://i.ibb.co/WxFwbcc/Makruzz-Gold.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
    },
  ];

  const ferryRoutes = [
    {
      id: 1,
      name: 'Port Blair to Havelock',
      title: 'A Tropical Escape',
      imgLink: 'https://i.ibb.co/yQBGY6M/ferry1.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'One of the most preferred ways to travel to different islands. Fast connectivity and a more organized way of traveling provides customers a good experience. The cruises take from 90 to 120 Minutes to reach Havelock Island from Port Blair and vice versa. These cruises are also called ferry. Ferry from Port Blair to Havelock Island booking is a must required when you want to travel to various islands in the Andaman archipelago.\n\nIf you wish to travel from Port Blair to Havelock Island in a ferry/cruise, then the cruises take around 100 Minutes to 2 hours 30 minutes to reach Havelock Island from Port Blair. The classes in the cruises vary when running in the sector of Port Blair and Havelock. The classes vary in terms of seating and views. The higher the cost, the better the view from the cruise. The 3 different classes exist such as Premium, Deluxe, and Royal in these cruises.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 2,
      name: 'Havelock to Port Blair',
      title: 'A Natural Paradise',
      imgLink: 'https://i.ibb.co/MCkPqvW/ferry2.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'Book your ferry tickets from Havelock To Port Blair. Select from various cruise ferries that take you from Havelock to Port Blair. Know about different timings at which these ferry sail to Port Blair. Select your specific category and seating and book your tickets online. The departure of the ferry from Havelock takes place at Havelock wharf or jetty and the arrival of the ferry to Port Blair takes place at Haddo wharf or jetty. The usual duration of the ferry from Havelock to Port Blair is from 1 Hour 15 Minutes to 2 Hours 30 Minutes. The fastest among all these ferry is nautika.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 3,
      name: 'Port Blair to Neil',
      title: "Nature's Ocean Heaven",
      imgLink: 'https://i.ibb.co/1MyGNF2/ferry3.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'Book your ferry tickets from Port Blair To Neil Island. Select from various cruise ferries that take you to Port Blair To Neil Island. Know about different timings at which these ferry sail to Neil. Select your specific category and seating and book your tickets online. The departure of the ferry from Port Blair takes place at Haddo wharf or jetty, and the arrival of the ferry to Neil Island takes place at Neil island wharf or jetty.\n\nNeil Island is located 37 Km from Port Blair by sea route. If one has to reach Neil Island, then a confirmed ferry ticket is a must required. As of 2022, NO Sea Plane operates to Neil Island. Ferry to Neil Island from Port Blair leaves from Haddo wharf. Ferry booking from Port Blair to Neil can be done online, and one needs to select a specific date of travel. The ferry sails from Haddo wharf, and you have to report at least 1 hour before the departure time.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 4,
      name: 'Neil to Port Blair',
      title: "Nature's Ocean Heaven",
      imgLink: 'https://i.ibb.co/By2nXsj/ferry4.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'Book your ferry tickets from Neil Island To Port Blair. Ferry booking from Neil Island to Port Blair is usually the last stretch of your trip. After you have covered Havelock Island, you move forward to Neil Island to visit its beaches and later return back from Neil to Port Blair before departing from Port Blair in a couple of days. There are various ferries that sail to Port Blair. Some of the ferries reach Port Blair by afternoon, and some reach Port Blair by evening.\n\nYou may select which ferry type works for you during your return from Neil Island. The order of ferry booking in Andaman islands should be first from Port Blair To Havelock, followed by Havelock to Neil Island, and finally from Neil Island to Port Blair. This way, you can get the best connectivity to reach Port Blair, Havelock, and Neil Island.',
      update: 'Last updated 3 mins ago',
    },
    {
      id: 5,
      name: 'Havelock to Neil',
      title: "Nature's Ocean Heaven",
      imgLink: 'https://i.ibb.co/j4j5GTm/ferry5.jpg',
      description:
        'We also have a special offer for you; you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        'Book your ferry tickets from Havelock To Neil Island. Select from various cruise ferries that take you to Neil Island from Havelock. Know about different timings at which these ferries sail to Neil from Havelock Island. Select your specific category and seating and book your tickets online. The departure of the ferry from Havelock Island takes place at Havelock Island jetty or wharf, and the arrival of the ferry to Neil Island takes place at Neil Island jetty, which is located near Bharatpur beach.',
    },
    {
      id: 6,
      name: 'Neil to Havelock',
      title: "Nature's Ocean Heaven",
      imgLink: neilToHavelock,
      description:
        'We also have a special offer for you; you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        'Book your ferry tickets from Neil Island To Havelock Island. Select from various cruise ferries that take you to Havelock Island from Neil Island. Know about different timings at which these ferries sail to Havelock. Select your specific category and seating and book your tickets online. The departure of the ferry from Neil Island takes place at Neil wharf or jetty, and the arrival of the ferry to Havelock Island takes place at Havelock Island wharf or jetty.\n\nThe schedule from Neil Island to Havelock Island is mainly open during the season when the inflow of customers to the Andaman Islands is more. If the ferry from Neil Island to Havelock Island is not sailing, then the only option to reach Havelock from Neil is via the Government ferry.',
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
        <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
          Popular Cruise
        </h1>
        <div className="grid mb-5 xl:grid-cols-3 md:grid-cols-2 gap-8 justify-center md:ml-0 items-center">
          {cruisePackage.map((packages) => (
            <div
              key={packages.id}
              className="w-[375px] mb-8 pb-3 rounded-2xl shadow-md"
              onClick={() => openModal(packages)}
            >
              <div className="bg-white rounded-2xl">
                <div className="">
                  <img
                    src={packages.imgLink}
                    alt={packages.name}
                    className="w-full h-60 object-cover rounded-t-2xl mb-4"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-normal pb-2 mb-2">
                    {packages.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {packages.update}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="font-medium text-4xl xl:text-6xl text-center pb-20 tracking-wider">
          Ferry Routes
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {ferryRoutes.map((places) => (
            <div
              key={places.id}
              className="w-[375px] mb-8 pb-3 rounded-2xl shadow-md"
              onClick={() => openModal(places)}
            >
              <div className="bg-white rounded-2xl">
                <div className="">
                  <img
                    src={places.imgLink}
                    alt={places.name}
                    className="w-full h-60 object-cover rounded-t-2xl mb-4"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-normal pb-2 mb-2">
                    {places.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">{places.update}</p>
                </div>
              </div>
            </div>
          ))}
          <Modal
            isOpen={selectedPlace !== null}
            closeModal={closeModal}
            data={selectedPlace}
          />
        </div>
      </div>
    </div>
  );
};

export default FerryPackage;
