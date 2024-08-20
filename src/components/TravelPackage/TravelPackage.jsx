import { useState } from 'react';
import Modal from '../Island&FerryModal/Modal';
import havelock from '../../assets/images/havelock.jpg';
import rossisland from '../../assets/images/rossisland.jpg';
import diglipur from '../../assets/images/diglipur.jpg';
import northbay from '../../assets/images/northbay.jpg';

const TravelPackage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openModal = (places) => {
    setSelectedPlace(places);
  };

  const closeModal = () => {
    setSelectedPlace(null);
    document.body.style.overflow = 'auto';
  };

  const travelPackageData = [
    {
      id: 1,
      name: 'Ross Island',
      title: 'A Timeless Treasure History Gem',
      imgLink: rossisland,
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        "Ross Island, located in the Andaman and Nicobar Islands, was once the administrative headquarters of the British during their colonial rule in India. The island was named after Sir James Ross, who discovered the island in 1841. In the late 19th century, the British established a penal settlement on the island and used it as a base for military operations in the region. The island was also used as a recreation spot for British officials and had various amenities such as a golf course, tennis court, and a church. After India's independence, the island was handed over to the Indian Navy and was used as a military base. However, a major earthquake in 1941 damaged most of the structures on the island, and today, it remains a popular tourist spot and is maintained by the Indian Tourism Department.",
      activity1Name: 'Presbyterian Church',
      activity1Description:
        'The Presbyterian Church at Ross Island was a protestant church built of stone and the windows had frames made of burma teak. The glass panes behind the altar were made of beautifully etched stained glass from Italy. The quality of the wood was so good that it survived the vagaries of weather for over a 100 years.',
      imgLink1: 'https://i.ibb.co/gZyKdgV/church.jpg',
      activity2Name: 'Light & Sound Show',
      activity2Description:
        'Experience the Light and Sound show in Ross Island of our freedom struggle and the history being shown and also offers a stunning view of the surroundings and the ocean.',
      imgLink2: 'https://i.ibb.co/wgW7hRj/lightandsoundshowrossisland.jpg',
      activity3Name: "Ruins & Abandoned Building's",
      activity3Description:
        "Lot's of history captured into these Abandoned Building's of these islands",
      imgLink3: 'https://i.ibb.co/gMXhTRW/ruinsrossisland.webp',
      activity4Name: 'Japanese Bunker',
      activity4Description:
        'The Japanese bunker, which is a remnant of the Japanese occupation of the island during World War II.',
      imgLink4: 'https://i.ibb.co/QCd48Bf/japaneese-bunker.jpg',
      activity5Name: 'Ferrar Beach',
      activity5Description:
        'Feel the Breeze and the amazing view of the never ending Ocean which also makes it the perfect location for sight-seeing and picnic spot.',
      imgLink5: 'https://i.ibb.co/T0YyyZQ/Ferar-Beach.jpg',
      packageDescription:
        'Overall, Ross Island offers a unique blend of history, nature, and adventure, making it a must-visit destination for tourists visiting the Andaman and Nicobar Islands.',
    },
    {
      id: 2,
      name: 'Havelock Island - Swaraj Dweep',
      title: 'The Tropical Bliss Island',
      imgLink: havelock,
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        'Havelock Island, located in the Andaman and Nicobar Islands, has a rich and diverse history. The island was named after Henry Havelock, a British general who served in India during the 19th century. During British colonial rule, Havelock Island was used as a base for military operations and as a penal settlement for political prisoners. The island remained largely uninhabited until the late 20th century, when it started attracting tourists for its pristine beaches and scenic beauty. Today, Havelock Island is one of the most popular tourist destinations in the Andaman and Nicobar Islands and is known for its stunning beaches, lush green forests, and diverse marine life. The island offers a range of activities for tourists, including snorkeling, scuba diving, kayaking, and trekking. With its rich history, natural beauty, and adventure opportunities, Havelock Island is a must-visit destination for anyone visiting the Andaman and Nicobar Islands.',
      activity1Name: 'Radha-Nagar Beach',
      activity1Description:
        'Also known as Beach No. 7, it is one of the most beautiful beaches in India and is perfect for swimming, sunbathing, and relaxing.',
      imgLink1: 'https://i.ibb.co/qRrddS4/radhanagar-beach-crowded.jpg',
      activity2Name: 'Elephanta Beach',
      activity2Description:
        'Known for its clear turquoise waters and coral reefs, this beach is ideal for snorkeling and scuba diving.',
      imgLink2: 'https://i.ibb.co/V20WdmZ/Elephanta.jpg',
      activity3Name: 'Scuba Diving',
      activity3Description:
        'Witness the underwater oceanic life, fish, deep sea flora, feel the depthness the of underwater',
      imgLink3: 'https://i.ibb.co/bB7ccHV/scuba-diving-in-havelock.jpg',
      activity4Name: 'Snorkeling',
      activity4Description:
        'Witness the underwater coral reefs and aquatic plants on the low level water surface area',
      imgLink4:
        'https://i.ibb.co/6YFSFph/snorkelling-at-havelock-island-beach-resort.jpg',
      activity5Name: 'Radha-Nagar View Point',
      activity5Description:
        'A viewpoint that offers a panoramic view of the island and the surrounding ocean.',
      imgLink5: 'https://i.ibb.co/bd9NgHH/radhanagar-viewpoint.webp',
      packageDescription:
        'These are just some of the many attractions that Havelock Island has to offer. With its stunning beaches, diverse marine life, and tranquil atmosphere, Havelock Island is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },
    {
      id: 3,
      name: 'Neil Island - Shaheed Dweep',
      title: "The Nature's Wonder",
      imgLink: 'https://i.ibb.co/TPFGhh1/neil-1.png',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        "Neil Island, located in the Andaman and Nicobar Islands, is known for its stunning beaches and tranquil atmosphere. The island was named after James George Smith Neill, a British general who served in India during the 19th century. During British colonial rule, Neil Island was used as a base for military operations and as a penal settlement for political prisoners. After India's independence, the island remained largely uninhabited until the late 20th century, when it started attracting tourists for its pristine beaches and scenic beauty. Today, Neil Island is one of the most popular tourist destinations in the Andaman and Nicobar Islands and is known for its diverse marine life, lush green forests, and stunning sunsets. With its rich history, natural beauty, and adventure opportunities, Neil Island is a must-visit destination for anyone visiting the Andaman and Nicobar Islands.",
      activity1Name: 'Laxmanpur Beach',
      activity1Description:
        'One of the most popular beaches on the island, it is known for its clear waters and stunning sunsets.',
      imgLink1: 'https://i.ibb.co/y5F1Dvq/Laxmanpur-Beach-Neil-Island.jpg',
      activity2Name: 'Bharatpur Beach',
      activity2Description:
        'A secluded beach known for its coral reefs and diverse marine life, perfect for snorkeling and scuba diving.',
      imgLink2: 'https://i.ibb.co/59xQkL1/Bharatpur-Beach-Neil-Island.jpg',
      activity3Name: 'Howrah Bridge aka Natural Rock',
      activity3Description:
        'A unique geological formation created by the waves and currents, it is a popular spot for photography. A popular spot for swimming and sunbathing, it is named after the famous Howrah Bridge in Kolkata.',
      imgLink3: 'https://i.ibb.co/N6LBWVT/howrah-bridge.jpg',
      activity4Name: 'Neil Island Jetty',
      activity4Description:
        'Neil Island Jetty: A popular spot for watching the sunrise and sunset, it offers a stunning view of the ocean and the surrounding islands.',
      imgLink4:
        'https://i.ibb.co/WBjnp1H/sunrise-at-sitapur-beach-neil-island-andaman-largethumbnail.jpg',
      packageDescription:
        'These are just some of the many attractions that Neil Island has to offer. With its tranquil atmosphere, stunning beaches, and diverse marine life, Neil Island is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },
    {
      id: 4,
      name: 'Baratang',
      title: 'A Natural Marvel Spot',
      imgLink: 'https://i.ibb.co/yhLLZdV/baratang.png',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        "Baratang Island, located in the Andaman and Nicobar Islands, is known for its stunning natural beauty and diverse landscapes. The island has a rich and diverse history, with evidence of human habitation dating back to the Neolithic era. During British colonial rule, Baratang was used as a base for military operations and as a penal settlement for political prisoners. After India's independence, the island remained largely uninhabited until the late 20th century, when it started attracting tourists for its stunning natural attractions, including the limestone caves, mud volcanoes, and mangrove forests. Today, Baratang is one of the most popular tourist destinations in the Andaman and Nicobar Islands, attracting visitors from all over the world to explore its diverse landscapes and unique attractions. With its rich history, natural beauty, and adventure opportunities, Baratang Island is a must-visit destination for anyone visiting the Andaman and Nicobar Islands.",
      activity1Name: 'Limestone Caves',
      activity1Description:
        'A unique geological formation created by the action of water and lime, it is a popular spot for adventure enthusiasts.',
      imgLink1: 'https://i.ibb.co/DWn0359/limestonecavebaratang.webp',
      activity2Name: 'Bharatpur Beach',
      activity2Description:
        'A secluded beach known for its coral reefs and diverse marine life, perfect for snorkeling and scuba diving.',
      imgLink2: 'https://i.ibb.co/DPdTGZn/mud-volcano-baratang.jpg',
      activity3Name: 'Howrah Bridge aka Natural Rock',
      activity3Description:
        'A unique geological formation created by the waves and currents, it is a popular spot for photography. A popular spot for swimming and sunbathing, it is named after the famous Howrah Bridge in Kolkata.',
      imgLink3: 'https://i.ibb.co/Qd9Z2Q2/parrotisland.webp',
      activity4Name: 'Mangrooves Creek',
      activity4Description:
        'Neil Island Jetty: A popular spot for watching the sunrise and sunset, it offers a stunning view of the ocean and the surrounding islands.',
      imgLink4: 'https://i.ibb.co/pfjFY0v/Mangrove-creek-baratang.webp',
      packageDescription:
        'These are just some of the many attractions that Neil Island has to offer. With its tranquil atmosphere, stunning beaches, and diverse marine life, Neil Island is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },
    {
      id: 5,
      name: 'Diglipur',
      title: 'A Hidden Heaven',
      imgLink: diglipur,
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        'Diglipur, located in the Andaman and Nicobar Islands, is a remote and sparsely populated area known for its stunning natural beauty. The region is home to a variety of landscapes, including lush green forests, rolling hills, and pristine beaches. One of the main attractions of Diglipur is the Ross and Smith Islands, which are connected by a sandbar and offer a unique landscape of clear turquoise waters, soft white sand, and dense tropical forests. Other popular attractions in the area include Saddle Peak, the highest point in the Andaman and Nicobar Islands, and Kalpong River, one of the largest rivers in the region. With its remote and peaceful atmosphere, stunning natural beauty, and diverse landscapes, Diglipur is a must-visit destination for anyone looking to escape the hustle and bustle of city life and explore the beauty of the Andaman and Nicobar Islands.',
      activity1Name: 'Ross & Smith Islands',
      activity1Description:
        'Two picturesque islands connected by a sandbar, they are known for their stunning natural beauty and pristine beaches.',
      imgLink1: 'https://i.ibb.co/H7ZXZts/diglipur.png',
      activity2Name: 'Saddle Peak',
      activity2Description:
        'The highest peak in the Andaman and Nicobar Islands, it offers a stunning view of the surrounding landscapes.',
      imgLink2: 'https://i.ibb.co/4MVgHZ7/saddlepeak.jpg',
      activity3Name: 'Mud Volcano',
      activity3Description:
        'A unique geological formation created by the action of mud and gas, it is one of the few mud volcanoes in the world.',
      imgLink3: 'https://i.ibb.co/K0Z8jYQ/mud-volcano-diglipur.jpg',
      activity4Name: 'Kalpong River',
      activity4Description:
        'The longest river in the Andaman and Nicobar Islands, it is surrounded by lush green forests and is a popular spot for rafting and kayaking.',
      imgLink4: 'https://i.ibb.co/JvJTwtP/kalpong-river-diglipur.jpg',
      packageDescription:
        'These are just some of the many attractions that Diglipur has to offer. With its stunning natural beauty, diverse landscapes, and unique attractions, Diglipur is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },

    {
      id: 6,
      name: 'Rangat',
      title: "A Nature's Retreat",
      imgLink: 'https://i.ibb.co/mXZCnN2/rangat.png',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        "Rangat is a small town located in the Middle Andaman district of the Andaman and Nicobar Islands. The town has a rich history dating back to the British colonial era, when it was used as a base for military operations and as a penal settlement for political prisoners. During the Indian independence movement, many freedom fighters were imprisoned in the Rangat jail. After India's independence, the town remained largely uninhabited until the late 20th century, when it started attracting tourists for its stunning natural beauty, including the lush green forests, rolling hills, and pristine beaches. Today, Rangat is one of the most popular tourist destinations in the Andaman and Nicobar Islands, attracting visitors from all over the world to explore its diverse landscapes and unique attractions. With its rich history, natural beauty, and peaceful atmosphere, Rangat is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.",
      activity1Name: 'Amkunj Beach',
      activity1Description:
        'A serene and pristine beach with clear turquoise waters, it is perfect for swimming, sunbathing, and exploring the nearby coral reefs.',
      imgLink1: 'https://i.ibb.co/XLzMybk/amkunj-beach.png',
      activity2Name: 'Moricedera Beach',
      activity2Description:
        'A stunning bay surrounded by lush green forests, it is perfect for a peaceful day out.',
      imgLink2: 'https://i.ibb.co/BjLrC8V/moricederabeach-rangat.jpg',
      packageDescription:
        'These are some of the many attractions that Rangat has to offer. With its stunning natural beauty, diverse landscapes, and unique attractions, Rangat is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },

    {
      id: 7,
      name: 'Northbay',
      title: "Nature's Standing Example!",
      imgLink: northbay,
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      update: 'Last updated 3 mins ago',
      packageFeature:
        'Nestled in the heart of the Andaman Islands, North Bay beckons with its pristine beauty and captivating charm. Blessed with crystal-clear waters and vibrant marine life, this coastal haven is a paradise for nature enthusiasts. Embark on a thrilling adventure with activities like snorkeling, where the kaleidoscopic underwater world unfolds before your eyes. Explore the vibrant coral reefs and encounter an array of marine species in their natural habitat.',
      activity1Name: 'Snorkeling',
      activity1Description:
        'Immerse yourself in the underwater wonderland as you snorkel through the vibrant coral reefs, encountering a kaleidoscope of marine life.',
      activity2Name: 'Sea Walking',
      activity2Description:
        'Experience the thrill of walking on the ocean floor with sea walking, a unique adventure that allows you to explore the seabed surrounded by fascinating marine creatures.',
      activity3Name: 'Glass-Bottom Boat Ride',
      activity3Description:
        'Enjoy a leisurely cruise on a glass-bottom boat, providing a mesmerizing view of the underwater world without getting wet. Perfect for those seeking a relaxed yet immersive experience.',
      activity4Name: 'Scuba Diving',
      activity4Description:
        'Dive into the depths of North Bay with scuba diving, where certified instructors guide you through the incredible marine ecosystems, revealing hidden treasures beneath the surface.',
      activity5Name: 'Coral Safari',
      activity5Description:
        'Embark on a Coral Safari to witness the breathtaking coral formations without getting wet. This semi-submarine adventure offers a unique perspective on the diverse marine life that thrives in North Bay.',
      packageDescription:
        'These are some of the many attractions that Northbay has to offer. With its stunning natural beauty, diverse landscapes, and unique attractions, Northbay is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },
  ];

  const offBeatPlaces = [
    {
      id: 1,
      name: 'Long Island',
      title: 'A Tropical Escape',
      imgLink: 'https://i.ibb.co/tmVbG5P/long.png',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'Long Island is one of the many picturesque islands located in the Andaman and Nicobar archipelago. The island has a rich history that dates back to the colonial era, when it was used as a penal settlement by the British. During this time, the island was used as a place of exile for political prisoners, and many famous freedom fighters such as Mahatma Gandhi, Jawaharlal Nehru, and Subhash Chandra Bose were held captive here. Today, Long Island is a popular tourist destination, attracting visitors from all over the world to experience its breathtaking beauty and rich cultural heritage. With its pristine beaches, lush tropical forests, and unique wildlife, Long Island is truly a tropical paradise that is well worth a visit.',
      update: 'Last updated 3 mins ago',
      activity1Name: 'Merk Bay Beach',
      activity1Description:
        'A serene bay surrounded by lush tropical forests, it is perfect for kayaking, fishing, and exploring the surrounding wildlife.',
      imgLink1: 'https://i.ibb.co/drZvgKN/Merk-Bay-Beach.jpg',
      activity2Name: 'Guitar Island',
      activity2Description:
        'Have a mesmerizing view of sunset from guitar island or have a aerial visual of guitar island',
      imgLink2: 'https://i.ibb.co/NmkqVMK/Guitar-Island-long-Island.jpg',
      activity3Name: 'Lalaji Bay Beach',
      activity3Description:
        'A very remote location in Long Island that can be reached both by boat and by trekking. We recommend to trek to this place and get an experience of a lifetime. Read more about visiting Lalaji bay in Andaman',
      imgLink3: 'https://i.ibb.co/ZzzRmr3/lalaji-bay-beach-long-Island.png',
      packageDescription:
        'These are just some of the many attractions that Long Island has to offer. With its stunning natural beauty, rich cultural heritage, and diverse landscapes, Long Island is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
    },
    {
      id: 2,
      name: 'Little Andaman',
      title: 'A Natural Paradise',
      imgLink: 'https://i.ibb.co/wKJzcSn/hutbay.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        'Little Andaman Island is the fourth largest island in the Andaman and Nicobar Islands, a Union Territory of India. The island is located in the southern part of the archipelago and is known for its rugged terrain, lush tropical forests, and pristine beaches. The island was originally inhabited by the Onge tribe, who are one of the indigenous tribes of the Andaman and Nicobar Islands. In the 19th century, the British established a settlement on the island and used it as a penal colony for convicts and political prisoners. Today, Little Andaman Island is a popular destination for tourists, offering a variety of activities such as surfing, trekking, and wildlife watching. The island is also known for its elephant sanctuary, which is home to a herd of elephants that roam freely through the dense jungle. In addition to its natural beauty, Little Andaman Island is also rich in cultural heritage, with many historical sites, monuments, and museums that showcase the history and culture of the island and the surrounding region. With its stunning scenery, rich history, and diverse range of activities, Little Andaman Island is a must-visit destination for anyone traveling to the Andaman and Nicobar Islands.',
      update: 'Last updated 3 mins ago',
      activity1Name: 'Butler Bay Beach',
      activity1Description:
        'A stunning, secluded beach with crystal clear waters and a coral reef, perfect for surfing and sunbathing.',
      imgLink1: 'https://i.ibb.co/kGRRkr5/butler-Bay-Beach.webp',
      activity2Name: 'White Surf Waterfall',
      activity2Description:
        'Have a mesmerizing view of sunset from guitar island or have a aerial visual of guitar island',
      imgLink2: 'https://i.ibb.co/tqKMtK8/whitesurfwaterfallhutbay.jpg',
      activity3Name: 'Little Andaman Lighthouse',
      activity3Description:
        'A historic lighthouse offering panoramic views of the surrounding islands and seas.',
      imgLink3: 'https://i.ibb.co/4V8WtxT/hutbaylighthouse.jpg',
      packageDescription:
        'These places offer a unique and unforgettable experience for visitors to Little Andaman Island, with its stunning scenery, rich history, and diverse range of activities. Whether you are a nature lover, adventure seeker, or simply looking for a peaceful escape, Little Andaman Island is a must-visit destination that should not be missed.',
    },
    {
      id: 3,
      name: 'Jolly Buoy',
      title: "Nature's Ocean Heaven",
      imgLink: 'https://i.ibb.co/fvvH00V/jollybuoy.jpg',
      description:
        'We also have a special offer for you, you can inquire about it when you contact us.',
      packageFeature:
        "Jolly Buoy Island is a stunning, uninhabited island located near Wandoor in the Andaman and Nicobar Islands. The island is part of the Mahatma Gandhi Marine National Park and is famous for its vibrant coral reefs and diverse marine life. The history of Jolly Buoy Island can be traced back to the colonial period when it was used as a strategic location by the British for maintaining their rule over the Andaman and Nicobar Islands. During World War II, the island was used as a base for the Allied forces. In the present day, Jolly Buoy Island is a popular destination for snorkeling and scuba diving, with its vibrant coral reefs and diverse marine life attracting visitors from all over the world. The island is also known for its serene beauty, with its pristine beaches and lush tropical forests providing a peaceful escape from the hustle and bustle of city life. In conclusion, Jolly Buoy Island is a must-visit destination for anyone visiting the Andaman and Nicobar Islands, offering a unique and unforgettable experience in one of India's most stunning and serene environments.",
      update: 'Last updated 3 mins ago',
      activity1Name: 'Coral Reefs',
      activity1Description:
        'The island is famous for its vibrant coral reefs, offering an incredible snorkeling and scuba diving experience.',
      imgLink1: 'https://i.ibb.co/FXXp4HJ/coral-reef-jollybuoy.jpg',
      activity2Name: 'Jollybuoy Beach',
      activity2Description:
        'Jolly Buoy Island is home to a stunning, pristine beach with crystal clear waters, perfect for sunbathing and swimming.',
      imgLink2: 'https://i.ibb.co/30DZfTH/jollybuoy-beach.png',
      activity3Name: 'Forest Trail',
      activity3Description:
        'A nature trail through the lush tropical forests surrounding the island, offering a chance to see local wildlife and enjoy the peaceful surroundings.',
      imgLink3: 'https://i.ibb.co/zNFKnyV/forest-trail-jollybuoy.webp',
      activity4Name: 'Mahatma Gandhi Marine National Park',
      activity4Description:
        "Jolly Buoy Island is part of the Mahatma Gandhi Marine National Park, offering a unique opportunity to observe marine life and explore the park's diverse ecosystems.",
      imgLink4:
        'https://i.ibb.co/YTFq24t/mahatma-gandhi-marine-national-park-wandoor.jpg',
      packageDescription:
        'These places offer a unique and unforgettable experience for visitors to Jolly Buoy Island, with its stunning scenery, rich history, and diverse range of activities. Whether you are a nature lover, adventure seeker, or simply looking for a peaceful escape, Jolly Buoy Island is a must-visit destination that should not be missed.',
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="top-[480px] lg:top-[600px] xl:top-[620px] 2xl:top-[650px]">
        <h1 className="font-medium text-4xl mt-14 xl:text-6xl text-center pb-20 tracking-wider">
          Top Places To Visit
        </h1>
        <div className="grid mb-5 xl:grid-cols-3 md:grid-cols-2 gap-8 justify-center md:ml-0 items-center">
          {travelPackageData.map((packages) => (
            <div
              key={packages.id}
              className="w-[375px] mb-8 pb-3 rounded-lg shadow-md"
              onClick={() => openModal(packages)}
            >
              <div className="bg-white rounded-lg">
                <div className="">
                  <img
                    src={packages.imgLink}
                    alt={packages.name}
                    className="w-full h-60 object-cover rounded-t-lg mb-4"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-normal pb-2 mb-2">
                    {packages.name}
                  </h2>
                  <h2 className="text-sm pb-2 font-bold mb-2">
                    {packages.title}
                  </h2>
                  <p className="text-gray-700">{packages.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {packages.update}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="font-medium text-4xl xl:text-6xl text-center pb-20 tracking-wider">
          Offbeat Places To Visit
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {offBeatPlaces.map((places) => (
            <div
              key={places.id}
              className="w-[375px] mb-8 pb-3 rounded-lg shadow-md"
              onClick={() => setSelectedPlace(places)}
            >
              <div className="bg-white rounded-lg">
                <div className="">
                  <img
                    src={places.imgLink}
                    alt={places.name}
                    className="w-full h-60 object-cover rounded-t-lg mb-4"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-normal pb-2 mb-2">
                    {places.name}
                  </h2>
                  <h2 className="text-sm pb-2 font-bold mb-2">
                    {places.title}
                  </h2>
                  <p className="text-gray-700">{places.description}</p>
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

export default TravelPackage;
