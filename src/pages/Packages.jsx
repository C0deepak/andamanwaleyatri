import { useState } from "react";
import PackageCard from "../components/travelPackages/PackageCard";
// import SoloPackageCard from "../components/travelPackages/SoloPackageCard";
import familyData from "../data/family";
import flagshipData from "../data/flagship";
import honeyMoonData from "../data/honeyMoon";
// import soloData from "@/data/solo";

const Packages = () => {
  const [selectedValue, setSelectedValue] = useState("All");

  // eslint-disable-next-line no-unused-vars
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const filterPackages = (data) => {
    if (selectedValue === "All") {
      return data;
    } else {
      return data.filter((item) => {
        const price = parseInt(item.discountedCost.replace(/\D/g, ""), 10);
        console.log(`Item: ${item.name}, Price: ${price}`);
        switch (selectedValue) {
          case "Below 15000":
            console.log("Below 15000");
            return price < 15000;
          case "15000-25000":
            console.log("15000-25000");
            return price >= 15000 && price <= 25000;
          case "25000-50000":
            console.log("25000-50000");
            return price > 25000 && price <= 50000;
          case "50000-80000":
            console.log("50000-80000");
            return price > 50000 && price <= 80000;
          default:
            console.log("Default");
            return true;
        }
      });
    }
  };

  return (
    <div className="">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={"https://andamantourtravel.com/assets/img/banner-or3.jpg"}
          height={3919}
          width={5938}
          className="object-cover w-full h-full"
          alt="banner boat"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-4xl mb-4">Packages</p>
          <p className="">HOME &nbsp;&nbsp;/&nbsp;&nbsp; PACKAGES</p>
        </div>
      </div>

      {/* <div className="w-full flex items-center justify-center pt-8 sm:pt-16 text-lg font-light text-gray-700 border-0">
        <select
          className="w-[90%] xl:w-[20vw] lg:w-[30vw] sm:w-[40vw] focus:outline-blue-400 px-4 text-center py-2 rounded-none"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option className="text-left px-4 mt-2 font-light" value="All">
            All
          </option>
          <option
            className="text-left px-4 mt-2 font-light"
            value="Below 15000"
          >
            Below Rupee 15000
          </option>
          <option
            className="text-left px-4 mt-2 font-light"
            value="15000-25000"
          >
            Rupee 15000 & 25000
          </option>
          <option
            className="text-left px-4 mt-2 font-light"
            value="25000-50000"
          >
            Rupee 25000 & 50000
          </option>
          <option
            className="text-left px-4 mt-2 font-light"
            value="50000-80000"
          >
            Rupee 50000 & 80000
          </option>
        </select>
      </div> */}

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
  );
};

export default Packages;
