import { sightSeeingdata } from '../components/sightseeing/sightSeeingdata';
import WaterCard from '../components/watersports/WaterCard';
import SightSeeingBg from '../components/watersports/SightSeeingBg';

const Sightseeing = () => {
  return (
    <>
      <SightSeeingBg />
      <div className="mx-10 md:mx-20">
        <div>
          <h1 className="text-center text-6xl font-bold tracking-widest my-20">
            HotSpots
          </h1>
          <div id="flex" className="flex flex-wrap justify-center text-center">
            {sightSeeingdata.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                <WaterCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sightseeing;
