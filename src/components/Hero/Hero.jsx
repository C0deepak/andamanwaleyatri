import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="h-screen w-full flex-col flex items-start justify-center mx-auto">
          {/* <Image src={img} className="w-3/4 mx-auto" /> */}
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="text-base md:text-xl font-medium">
              Discover your place
            </p>
          </div>
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              Explore The
            </p>
          </div>
          <div className="flex flex-row gap-6 w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              Best
            </p>
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Beautiful
            </p>
          </div>
          <div className="flex flex-row gap-6 w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Places
            </p>
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              in
            </p>
            <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Andaman
            </p>
          </div>
          <div className="w-full md:w-4/5 px-2 md:px-0 mx-auto text-left text-white">
            <div className="mt-10">
              <Link
                to="/packages"
                className="px-8 py-4 rounded-md bg-gradient-to-tl from-[#ff503dac] to-[#c30808] text-xl font-poppins font-semibold hover:underline"
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

export default Hero;
