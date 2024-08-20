import waterbg from '../../assets/images/watersports.jpg';

const WaterBg = () => {
  return (
    <div className="">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={waterbg}
          height={3919}
          width={5938}
          className="object-cover w-full h-full"
          alt="banner boat"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-4xl mb-4">Water Sports</p>
          <p className="">HOME &nbsp;&nbsp;/&nbsp;&nbsp; WATER SPORTS</p>
        </div>
      </div>
    </div>
  );
};

export default WaterBg;
