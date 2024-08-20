import './page.css';
import Island from "../../assets/images/island.jpg"

const IslandPage = () => {
  return (
    <div className="">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={Island}
          height={3919}
          width={5938}
          className="object-cover w-full h-full"
          alt="banner boat"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-4xl mb-4">Best Places</p>
          <p className="">HOME &nbsp;&nbsp;/&nbsp;&nbsp; BEST PLACES</p>
        </div>
      </div>
    </div>
  );
};

export default IslandPage;
