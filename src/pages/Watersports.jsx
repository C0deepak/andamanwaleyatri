import { watersportsdata } from '../components/watersports/waterSportsdata'
import { beachdata } from '../components/watersports/beachdata'
import WaterCard from '../components/watersports/WaterCard'
import WaterBg from '../components/watersports/WaterBg'

const Watersports = () => {
  return (
    <>
      <WaterBg/>
      <div className="mx-10 md:mx-20">
        <div className='w-full'>
          <h1 className="text-center text-6xl font-bold tracking-widest my-20">
            Trending Activities
          </h1>
          <div id="flex" className="flex flex-wrap justify-center text-center">
            {watersportsdata.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                <WaterCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-center text-6xl font-bold tracking-widest my-20">
            Popular Beaches
          </h1>
          <div id="flex" className="flex flex-wrap justify-center text-center">
            {beachdata.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                <WaterCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Watersports