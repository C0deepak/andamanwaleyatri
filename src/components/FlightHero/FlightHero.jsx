import { Link } from 'react-router-dom';

const FlightHero = () => {

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="h-screen w-full flex-col flex items-start justify-center mx-auto">
          {/* <Image src={img} className="w-3/4 mx-auto" /> */}
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="text-base md:text-xl font-medium">
              Discover Your New Adventure
            </p>
          </div>
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-1 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-medium">
              Checkout The
            </p>
          </div>
          <div className="flex flex-row gap-6 w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-4 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-medium">
              Best
            </p>
            <p className="mt-4 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold">
              & Affordable
            </p>
          </div>
          <div className="flex flex-row gap-6 w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-4 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold">
              Flight Tickets
            </p>
            <p className="mt-4 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-medium">
              Below
            </p>
            {/* <p className="mt-4 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold">
              Andaman
            </p> */}
          </div>
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <div className="mt-10">
              <Link
                to="/packages"
                className="px-6 py-3 rounded-md bg-gradient-to-tl from-[#ff503dac] to-[#c30808] text-base font-poppins font-semibold hover:underline"
              >
                Checkout Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHero;
