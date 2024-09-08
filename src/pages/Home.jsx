/* eslint-disable no-unused-vars */
import { Boxes, LandPlot, Palmtree, PlaneIcon, Ship } from 'lucide-react';
import { useState } from 'react';
import BannerImg from '../assets/cover-women.jpg';
import andamanPic from '../assets/images/pexels-asad-photo-maldives-457882.jpg';
import Banner2 from '../assets/travel-cover2.jpg';
import Banner from '../components/Banner/Banner';
import BannerPic from '../components/BannerPic/BannerPic';
import Hero from '../components/Hero/Hero';
import OrderPopup from '../components/OrderPopup/OrderPopup';
import Testimonial from '../components/Testimonial/Testimonial';
import TravelPackage from '../components/TravelPackage/TravelPackage';
import ActivitiesCarousel from '../components/activitycarousel/ActivitiesCarousel';
import PackageCard from '../components/travelPackages/PackageCard';
import familyData from '../data/family';
import flagshipData from '../data/flagship';
import honeyMoonData from '../data/honeyMoon';
import Flightsearchform from './Flightsearchform';
import FerryPackage from '../components/TravelPackage/FerryPackage';
import justenjoy from '../assets/images/justenjoy.jpg';

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedValue, setSelectedValue] = useState('All');

  // eslint-disable-next-line no-unused-vars
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const filterPackages = (data) => {
    if (selectedValue === 'All') {
      return data;
    } else {
      return data.filter((item) => {
        const price = parseInt(item.discountedCost.replace(/\D/g, ''), 10);
        console.log(`Item: ${item.name}, Price: ${price}`);
        switch (selectedValue) {
          case 'Below 15000':
            console.log('Below 15000');
            return price < 15000;
          case '15000-25000':
            console.log('15000-25000');
            return price >= 15000 && price <= 25000;
          case '25000-50000':
            console.log('25000-50000');
            return price > 25000 && price <= 50000;
          case '50000-80000':
            console.log('50000-80000');
            return price > 50000 && price <= 80000;
          default:
            console.log('Default');
            return true;
        }
      });
    }
  };

  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <img
            src={andamanPic}
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          />
          <Hero />
        </div>
        <div className="w-full md:pt-14 pt-8">
          <h1 className="text-center md:text-2xl text-xl tracking-[0.2em] font-[550]">
            AN UNIQUE ISLAND
          </h1>
          <h1 className="text-center md:text-5xl text-4xl tracking-[0.125em] font-[550] text-emerald-800 mt-4 px-3 uppercase">
            Andaman & Nicobar Islands
          </h1>
          <Palmtree
            size={'36px'}
            className="text-center w-full mt-4 text-yellow-400"
          />
          <div className="flex flex-col md:mx-16 md:items-center justify-between mt-12 gap-y-10 text-lg font-[430] xl:px-20 lexs:text-base sm:mx-10 mx-6">
            <div className="flex md:flex-row flex-col gap-x-10 w-full gap-y-8">
              <div>
                Andaman, the southernmost haven in the Bay of Bengal, extends
                over 800 square kilometers, showcasing an array of landscapes
                that captivate the beholder. Recognized as a UNESCO{' '}
                <span className="text-red-600 font-semibold">
                  Biosphere Reserve
                </span>{' '}
                in 1993, Andaman boasts a{' '}
                <span className="font-semibold text-black">
                  rich natural heritage.
                </span>
              </div>
              <div>
                Shaped by historical volcanic activity, the archipelago reveals
                pristine{' '}
                <span className="text-red-600 font-semibold">
                  white-sand beaches
                </span>{' '}
                caressed by crystal-clear waters. Amidst this beauty, one
                encounters unique{' '}
                <span className="font-semibold text-black">
                  volcanic grottos, lava lakes, and craters,
                </span>{' '}
                forming a surreal and captivating backdrop.
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-x-10 w-full gap-y-8">
              <div>
                In Andaman, lively tourist centers with luxurious accommodations
                seamlessly coexist with rural expanses. Venture beyond the
                vibrant spots to discover{' '}
                <span className="font-semibold text-black">
                  unspoiled terrains, expansive horizons, and
                </span>{' '}
                <span className="text-red-600 font-semibold">
                  solitary islands
                </span>
                , offering a retreat into serenity.
              </div>
              <div>
                Reflecting the allure of its natural splendor, Andaman invites
                exploration of its enchanting tapestry, blending human vibrancy
                with untouched scenic beauty, creating a{' '}
                <span className="font-semibold text-black">
                  harmonious destination for travelers
                </span>{' '}
                seeking both the familiar and the extraordinary.
              </div>
            </div>
          </div>
          <ActivitiesCarousel />
          <div className="bg-[#F4EFE5] w-full py-16 sm:px-10 lg:px-16 xl:px-20 xl:py-12 lexs:px-1 px-2">
            <div className="flex justify-evenly w-full md:flex-row flex-col items-center gap-y-8">
              <img
                src={justenjoy}
                width={900}
                height={1600}
                className="md:w-[40%] w-[85%] md:h-[70vh] h-[60vh] rounded-md shadow-xl sharpness-150 contrast-125 brightness-90"
              />
              <div className="flex flex-col md:w-[45%] w-[90%]">
                <p className="md:text-2xl text-xl tracking-[0.2em] font-[550]">
                  WHAT TO DO
                </p>
                <h1 className="md:text-5xl text-4xl font-[550] text-emerald-800 mb-8">
                  JUST ENJOY
                </h1>
                <p className="font-medium text-slate-700 sm:leading-8 leading-6">
                  Embark on a journey with Safar Andaman and discover the
                  allure of these paradisiacal islands. Whether you are a solo
                  adventurer, a couple seeking a romantic escape, or a family
                  yearning for bonding moments, our diverse range of packages
                  caters to every traveler. Let us be your compass as you
                  navigate the beauty of the Andaman Islands, creating memories
                  that transcend the ordinary. Safar Andaman - where every
                  journey is a story waiting to be told.
                </p>
                <div className="flex text-red-500 gap-x-10 text-lg mt-8 font-semibold leading-9 xs:px-4 justify-center md:justify-evenly flex-col sm:flex-row">
                  <div className="flex flex-col gap-y-1 lexs:gap-y-0">
                    <p>Enjoy on Beaches</p>
                    <p>Sports & Boating</p>
                    <p>Museums, Art & Culture</p>
                    <p>Trekking</p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p>Purchase & Markets</p>
                    <p>Spa & Relax</p>
                    <p>Convention Bureau</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-24 lexs:mt-12">
              <div className="flex md:flex-row bg-white rounded-sm shadow-2xl flex-col-reverse xl:w-[65%] sm:w-[75%] w-[100%]">
                <div className="xl:py-12 xl:pl-10 md:w-[50%] py-6 w-full md:px-6 px-4">
                  <h1 className="tracking-[0.175em] font-semibold text-2xl font-popins leading-10 mb-6 xl:leading-8 sm:text-xl">
                    Discover Andaman&apos;s Timeless Allure
                  </h1>
                  <p className="font-[450]">
                    Embark on an Andaman odyssey with Safar Andaman, where
                    azure waters meet pristine shores. Immerse in bespoke
                    experiences, curated for your wanderlust. Let every moment
                    be a chapter in your unforgettable travel tale.
                  </p>
                  {/* <div className="w-full flex items-center mt-8 sxl:mt-4 md:justify-center">
                  <button className="rounded-xl bg-yellow-400 text-lg w-[90%] font-[700] py-3 font-montserrat px-3 sxl:text-base sxl:font-semibold">
                    DOWNLOAD BROCHURE
                  </button>
                </div> */}
                </div>
                <div className="md:w-[50%] xl:p-8 p-4 w-full">
                  <img
                    alt="brochure image"
                    src={'https://maharajatravels.in/wp-content/uploads/2023/08/Andaman-budget-package5.jpg'}
                    width={5488}
                    height={3659}
                    className="w-full h-full rounded-sm shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="w-full py-16 sm:px-10 lg:px-16 xl:px-20 xl:py-12 lexs:px-1 px-2 flex justify-center flex-col">
              <h1 className="w-full md:text-[2.75rem] sm:text-4xl text-3xl font-roboto font-semibold text-center tracking-wider py-8">
                Andaman Best Travel Agency
              </h1>

              <div className='gap-8 grid grid-cols-2 md:grid-cols-4'>
                <div className='p-2 bg-white'>
                  <div className='bg-gradient-to-tl from-[#ffa399] to-[#f73b3b] md:p-8 p-4 font-semibold flex flex-col gap-4 md:gap-6 items-center justify-center text-xl md:text-2xl'>
                    <Boxes size={30} />
                    <p>Packages</p>
                  </div>
                </div>

                <div className='p-2 bg-white'>
                  <div className='bg-gradient-to-tl from-[#ffa399] to-[#f73b3b] md:p-8 p-4 font-semibold flex flex-col gap-4 md:gap-6 items-center justify-center text-xl md:text-2xl'>
                    <Ship size={30} />
                    <p>Ferry</p>
                  </div>
                </div>

                <div className='p-2 bg-white'>
                  <div className='bg-gradient-to-tl from-[#ffa399] to-[#f73b3b] md:p-8 p-4 font-semibold flex flex-col gap-4 md:gap-6 items-center justify-center text-xl md:text-2xl'>
                    <LandPlot size={30} />
                    <p>Activity</p>
                  </div>
                </div>

                <div className='p-2 bg-white'>
                  <div className='bg-gradient-to-tl from-[#ffa399] to-[#f73b3b] md:p-8 p-4 font-semibold flex flex-col gap-4 md:gap-6 items-center justify-center text-xl md:text-2xl'>
                    <PlaneIcon size={30} />
                    <p>Packages</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center flex-col">
              {/* {filterPackages(soloData).length !== 0 ? (
                <div className="w-full md:mt-8 xl:p-12 md:p-8 sm:p-6 p-4 sm:mt-4 mt-0">
                  <h1 className="w-full md:text-[2.75rem] sm:text-4xl text-3xl font-roboto font-semibold text-center tracking-wider">
                    Solo Trip
                  </h1>
                  <div className="flex xl:p-6 justify-center flex-wrap xl:gap-x-8 lg:gap-x-6 gap-x-8 xl:gap-y-20 items-stretch lg:p-4 sm:p-2 p-0 lg:gap-y-12 md:gap-y-8 sm:gap-y-4 gap-y-1">
                    {filterPackages(soloData).map((item, index) => (
                      <SoloPackageCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              ) : null} */}

              {filterPackages(honeyMoonData).length !== 0 ? (
                <div className="w-full md:mt-8 xl:p-12 md:p-8 sm:p-6 p-4 sm:mt-4 mt-0">
                  <h1 className="w-full md:text-[2.75rem] sm:text-4xl text-3xl font-roboto font-semibold text-center tracking-wider">
                    HoneyMoon Packages
                  </h1>
                  <div className="flex xl:p-6 justify-center flex-wrap xl:gap-x-8 lg:gap-x-6 gap-x-8 xl:gap-y-20 items-stretch lg:p-4 sm:p-2 p-0 lg:gap-y-12 md:gap-y-8 sm:gap-y-4 gap-y-1">
                    {filterPackages(honeyMoonData).map((item, index) => (
                      <PackageCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              ) : null}

              {filterPackages(familyData).length !== 0 ? (
                <div className="w-full md:mt-8 xl:p-12 md:p-8 sm:p-6 p-4 sm:mt-4 mt-0">
                  <h1 className="w-full md:text-[2.75rem] sm:text-4xl text-3xl font-roboto font-semibold text-center tracking-wider">
                    Family Packages
                  </h1>
                  <div className="flex xl:p-6 justify-center flex-wrap xl:gap-x-8 lg:gap-x-6 gap-x-8 xl:gap-y-20 items-stretch lg:p-4 sm:p-2 p-0 lg:gap-y-12 md:gap-y-8 sm:gap-y-4 gap-y-1">
                    {filterPackages(familyData).map((item, index) => (
                      <PackageCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="w-full md:mt-8 xl:p-12 md:p-8 sm:p-6 p-4 sm:mt-4 mt-0">
                <h1 className="w-full md:text-[2.75rem] sm:text-4xl text-3xl font-roboto font-semibold text-center tracking-wider">
                  Flagship Packages
                </h1>
                <div className="flex xl:p-6 justify-center flex-wrap xl:gap-x-8 lg:gap-x-6 gap-x-8 xl:gap-y-20 items-stretch lg:p-4 sm:p-2 p-0 lg:gap-y-12 md:gap-y-8 sm:gap-y-4 gap-y-1">
                  {flagshipData.map((item, index) => (
                    <PackageCard key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center mt-10 mx-auto">
              <Flightsearchform />
            </div> */}
            <FerryPackage />
            {/* <div className="w-full flex sm:flex-row flex-col mt-20 px-0 xl:px-20 xl:mt-16 lexs:px-1 gap-x-8 justify-evenly xl:mb-16 md:mb-12 sm:mb-8 mb-4">
            <div className="flex flex-col sm:w-[50%] w-full sm:px-0 px-4">
              <p className="md:text-2xl text-xl tracking-[0.2em] font-[550]">
                GETTING AROUND ANDAMAN
              </p>
              <h1 className="md:text-5xl text-4xl font-[550] text-emerald-800 mb-8">
                PLAN YOUR TRIP
              </h1>
              <p className="font-medium text-slate-700 sm:leading-8 mb-8 leading-6">
                Nulla qui deserunt occaecat amet ut proident sunt pariatur in
                aute excepteur tempor. Ullamco quis esse ea culpa Lorem non
                culpa. Esse velit id eu fugiat tempor non in. Proident qui duis
                et deserunt reprehenderit. Nulla qui deserunt occaecat amet ut
                proident sunt pariatur in aute excepteur tempor. Ullamco quis
                esse ea culpa Lorem non culpa. Esse velit id eu fugiat tempor
                non in. Proident qui duis et deserunt reprehenderit.
              </p>
            </div>
            <Image
              src="https://2minutetabletop.com/wp-content/uploads/2020/02/Arvyre-Continent-Map-23x16-Base-Map.jpg"
              height={720}
              width={1080}
              className="sm:w-[50%] w-full md:h-full sm:h-[70vh] sm:px-0 px-4"
              
            />
          </div> */}

            {/* <div className="w-full flex justify-between flex-col items-center mx-auto gap-y-4 xl:px-16 px-0">
              <p className="md:text-2xl text-xl tracking-[0.2em] font-[550]">
                GETTING TO ANDAMAN ISLANDS
              </p>
              <button className="rounded-xl px-10 bg-yellow-400 text-lg font-semibold py-3 font-montserrat h-fit mt-auto sm:mb-4 md:mb-12">
                VIEW MAPS
              </button>
            </div> */}
          </div>
          {/* <div className="w-full flex justify-center items-center flex-col bg-yellow-400 py-8">
            <p className="text-center md:text-2xl text-xl tracking-[0.2em] font-[550]">
              HEAR FROM THE
            </p>
            <h1 className="text-center md:text-5xl text-4xl font-[550] text-emerald-800 mb-8">
              TOURISTS EXPERIENCES
            </h1>

            <div className="flex w-full justify-center mt-2 md:mt-20 gap-x-4 sm:flex-row sm:w-auto gap-y-4 sm:mt-10 flex-col items-center">
              <Link
              to="/"
              className="px-8 py-3 font-semibold bg-white shadow-md rounded-lg md:text-base text-sm md:px-6 sm:w-auto"
            >
              VIEW ALL EXPERIENCES
            </Link>
              <Link
                to="https://www.instagram.com/travel_with_andaman/?igshid=ZTM4ZDRiNzUwMw%3D%3D"
                className="px-8 py-3 font-semibold bg-red-500 text-yellow-400 shadow-md rounded-lg md:text-base text-sm md:px-6"
              >
                SHARE YOUR EXPERIENCE
              </Link>
            </div>
          </div> */}
        </div>
        <TravelPackage />
        <BannerPic img={BannerImg} />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
